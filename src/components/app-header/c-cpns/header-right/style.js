import styled from "styled-components";

export const RightWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-size: 14px;
  font-size: 600;
  color: ${(props) => props.theme.text.primaryColor};

  .btns {
    display: flex;
    align-items: center;
    .btn {
      height: 18px;
      line-height: 18px;
      padding: 12px 15px;
      cursor: pointer;
      border-radius: 22px;

      &:hover {
        background-color: #f5f5f5;
      }
    }
  }

  .profile {
    position: relative;
    display: flex;
    align-items: center;
    width: 77px;
    height: 42px;
    justify-content: space-evenly;
    box-sizing: border-box;
    border: 1px solid #ccc;
    border-radius: 25px;
    background-color: #fff;
    cursor: pointer;
    color: ${(props) => props.theme.text.primaryColor};

    ${(props) => props.theme.mixin.boxShadow}

    .panel {
      position: absolute;
      right: 0;
      top: 54px;
      width: 240px;
      border-radius: 10px;
      background-color: #fff;
      box-shadow: 0 0 6px rgba(0, 0, 0, 0.2);

      .top,
      .bottom {
        padding: 10px 0;

        .item {
          height: 40px;
          line-height: 40px;
          padding: 0 16px;

          &:hover {
            background-color: #f5f5f5;
          }
        }
      }

      .top {
        border-bottom: 1px solid #ddd;
      }
    }
  }
`;
