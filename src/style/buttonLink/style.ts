import { Link } from "react-router-dom"
import styled, { css } from "styled-components"
import { iStyledButtonLink } from "./types"

export const StyledButtonLink = styled(Link)<iStyledButtonLink>`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: 0.5s;
  color: var(--gray-0);
  text-decoration: none;

  ${({ variant }) => {
    switch (variant) {
      default:
        return css`
          text-align: center;
          color: var(--gray-0);
          padding: 7px 25px;
          border-radius: 20px;
          border: 2px solid var(--gray-0);
          background-color: transparent;
          &:hover {
            border: 2px solid transparent;
            background-image: linear-gradient(90deg, #4f4d8c 0%, #807ddb 55%, #5f5da6 100%);
          }
        `

      case "theme-desktop-menu":
        return css`
          position: relative;
          margin: 10px;
          width: 50px;
          height: 50px;
          background-image: linear-gradient(45deg, #0095ff 20%, #8d09ed 90%);
          border-radius: 10px;
          &:hover {
            :after {
              content: "";
              position: absolute;
              inset: -4px;
              border-radius: 13px;
              border: 2px solid var(--gray-0);
            }
          }
        `

      case "theme-mobile-menu":
        return css`
          position: relative;
          margin: 10px;
          width: 35px;
          height: 35px;
          background-image: linear-gradient(45deg, #0095ff 20%, #8d09ed 90%);
          border-radius: 10px;
        `

      case "theme-register-login":
        return css`
          background-color: transparent;
          border-radius: 3px;
          border: 2px solid var(--gray-0);
          text-align: center;
          padding: 15px 30px;
        `
    }
  }}
`
