import styled, {css} from "styled-components";
import CustomButton from "../custom-button/custom-buttom-component";

export const CollectionItemContainer = styled.div`
    width: 22vw;
    display: flex;
    flex-direction: column;
    height: 550px;
    align-items: center;
    position: relative;

    &:hover {
        .image {
          opacity: 0.8;
        }
        button {
          opacity: 0.85;
          display: flex;
        }
      }
`;


export const CollectionFooter = styled.div`
    width: 100%;
    height: 5%;
    display: flex;
    justify-content: space-between;
    font-size: 18px;
`;


export const NameFooter = styled.span`
    width: 90%;
    margin-bottom: 15px;
`;

export const PriceFooter = styled.span`
    width: 10%;
`;

export const ImageCollection = styled.div`
    width: 100%;
    height: 95%;
    background-size: cover;
    background-position: center;
    margin-bottom: 5px;
`
export const AddButton = styled(CustomButton)`
  width: 80%;
  opacity: 0.7;
  position: absolute;
  top: 80%;
  display: none;
`;


