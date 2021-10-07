import React from "react";
import Link from 'next/link'
import * as S from "./styled";

const Menu = () => {
  return (
    <>
      <S.NavMenu>
        <S.List>
          <S.Item>
            <Link href="https://www.linkedin.com/in/matheus-raduan/" passHref>
              <S.ItemLink target="_blank" data-cursor-hover>
                LinkedIn
              </S.ItemLink>
            </Link>
          </S.Item>
          <S.Item>
            <Link href="https://github.com/MRRaduan" passHref>
              <S.ItemLink target="_blank" data-cursor-hover>
                Github
              </S.ItemLink>
            </Link>
          </S.Item>
          <S.Item>
            <Link href="mailto: math.raduan@gmail.com" passHref>
              <S.ItemLink data-cursor-hover>
                Email
              </S.ItemLink>
            </Link>
          </S.Item>
        </S.List>
      </S.NavMenu>
    </>
  );
};

export default Menu;
