import React, { useRef, useEffect } from "react"
import paper from "paper"
import SimplexNoise from "simplex-noise"
import * as S from "./styled"

const Cursor = () => {
  const canvas = useRef(null)

  let clientX = -100
  let clientY = -100

  const initCursor = () => {
    const innerCursor = document.getElementById("inner-cursor")
    document.addEventListener("mousemove", e => {
      clientX = e.clientX
      clientY = e.clientY
    })

    const renderCursor = () => {
      innerCursor.style.transform = `translate(${clientX}px, ${clientY}px)`
      requestAnimationFrame(renderCursor)
    }

    requestAnimationFrame(renderCursor)
  }

  let lastX = 0
  let lastY = 0
  let isStuck = false
  // let showCursor = false
  let group, stuckX, stuckY

  const initCanvas = () => {
    const shapeBounds = {
      width: 75,
      height: 75,
    }
    paper.setup(canvas.current)

    const strokeColor = "rgba(252,252, 252, 1)"
    const strokeWidth = 1
    const segments = 8
    const radius = 15

    const noiseScale = 150
    const noiseRange = 4
    let isNoisy = false

    const polygon = new paper.Path.RegularPolygon(
      new paper.Point(0, 0),
      segments,
      radius
    )
    polygon.strokeColor = strokeColor
    polygon.strokeWidth = strokeWidth
    polygon.smooth()
    group = new paper.Group([polygon])
    group.applyMatrix = false

    const noiseObjects = polygon.segments.map(() => new SimplexNoise())
    let bigCoordinates = []

    const lerp = (a, b, n) => {
      return (1 - n) * a + n * b
    }

    const map = (value, in_min, in_max, out_min, out_max) => {
      return (
        ((value - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
      )
    }

    paper.view.onFrame = event => {
      if (!isStuck) {
        lastX = lerp(lastX, clientX, 0.2)
        lastY = lerp(lastY, clientY, 0.2)
        group.position = new paper.Point(lastX, lastY)
      } else if (isStuck) {
        lastX = lerp(lastX, stuckX, 0.2)
        lastY = lerp(lastY, stuckY, 0.2)
        group.position = new paper.Point(lastX, lastY)
      }

      if (isStuck && polygon.bounds.width < shapeBounds.width) {
        polygon.scale(1.08)
      } else if (!isStuck && polygon.bounds.width > 30) {
        if (isNoisy) {
          polygon.segments.forEach((segment, i) => {
            segment.point.set(bigCoordinates[i][0], bigCoordinates[i][1])
          })
          isNoisy = false
          bigCoordinates = []
        }

        const scaleDown = 0.92
        polygon.scale(scaleDown)
      }

      if (isStuck && polygon.bounds.width >= shapeBounds.width) {
        isNoisy = true

        if (bigCoordinates.length === 0) {
          polygon.segments.forEach((segment, i) => {
            bigCoordinates[i] = [segment.point.x, segment.point.y]
          })
        }

        polygon.segments.forEach((segment, i) => {
          // get new noise value
          // we divide event.count by noiseScale to get a very smooth value
          const noiseX = noiseObjects[i].noise2D(event.count / noiseScale, 0)
          const noiseY = noiseObjects[i].noise2D(event.count / noiseScale, 1)

          // map the noise value to our defined range
          const distortionX = map(noiseX, -1, 1, -noiseRange, noiseRange)
          const distortionY = map(noiseY, -1, 1, -noiseRange, noiseRange)

          // apply distortion to coordinates
          const newX = bigCoordinates[i][0] + distortionX
          const newY = bigCoordinates[i][1] + distortionY

          // set new (noisy) coodrindate of point
          segment.point.set(newX, newY)
        })
      }
      polygon.smooth()
    }
  }

  const initHovers = () => {
    const handleMouseEnter = e => {
      const navItem =
        e.currentTarget.querySelector("[data-cursor-circle]") || e.currentTarget
      const navItemBox = navItem.getBoundingClientRect()
      stuckX = Math.round(navItemBox.left + navItemBox.width / 2)
      stuckY = Math.round(navItemBox.top + navItemBox.height / 2)

      isStuck = true
    }

    const handleMouseLeave = () => {
      isStuck = false
    }

    const linkItems = document.querySelectorAll("[data-cursor-hover]")
    linkItems.forEach(item => {
      item.addEventListener("mouseenter", handleMouseEnter)
      item.addEventListener("mouseleave", handleMouseLeave)
    })
  }

  useEffect(() => {
    initCursor()
    initCanvas()
    initHovers()
  }, [])

  return (
    <>
      <S.CursorSmall id="inner-cursor" />
      <S.CursorCanvas ref={canvas} id="canvas" />
    </>
  )
}

export default Cursor
