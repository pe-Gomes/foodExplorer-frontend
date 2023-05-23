import styled from 'styled-components'
import DownArrow from '../../assets/CaretDown.svg'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  .return {
    margin-top: 1.5em;
    width: fit-content;

    ${({ theme }) => theme.FONTS.POPPINS_300_BOLD};

    svg {
      margin-right: 11px;
      font-size: 2rem;
    }
  }

  > main {
    max-width: 80%;
    margin: 0 auto;
    flex-grow: 1;

    > h1 {
      ${({ theme }) => theme.FONTS.POPPINS_400_MEDIUM};
      margin: 24px 0 32px;
    }

    p {
      margin-bottom: 1em;
      ${({ theme }) => theme.FONTS.ROBOTO_SMALL_REGULAR};
    }
  }
`

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5em;

  .fileInput {
    position: relative;

    label {
      padding: 12px 32px;

      display: flex;
      align-items: center;
      gap: 8px;

      background-color: ${({ theme }) => theme.COLORS.DARK_800};

      ${({ theme }) => theme.FONTS.POPPINS_100_MEDIUM};

      cursor: pointer;
    }
  }

  .saveButton {
    display: flex;
    background-color: ${({ theme }) => theme.COLORS.TOMATO_400};
  }

  @media (min-width: 1150px) {
    .fileInput {
      position: relative;
      width: 229px;
      height: 48px;

      label {
        width: 229px;
        height: 48px;

        padding: 12px 32px;

        position: absolute;
        top: 32px;
        left: 0;
      }
    }

    .saveButton {
      width: 172px;
    }
  }
`

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;

  input[type='file'] {
    display: none;
    position: absolute;
    top: 0;
    left: 0;
  }

  input {
    background-color: ${({ theme }) => theme.COLORS.DARK_800} !important;
  }

  > p {
    margin-bottom: 16px;
  }

  select {
    padding: 13px 16px;

    height: 48px;

    appearance: none;
    -webkit-appearance: none;

    ${({ theme }) => theme.FONTS.ROBOTO_SMALLEST_REGULAR}
    color: ${({ theme }) => theme.COLORS.LIGHT_400};

    background-color: ${({ theme }) => theme.COLORS.DARK_800};
    border: none;
    border-radius: 5px;

    background-image: url(${DownArrow});
    background-repeat: no-repeat;
    background-position: right 16px top 50%;
  }
`

export const FirstRow = styled.div`
  display: block;

  > div:nth-child(2),
  > div:nth-child(3) {
    margin-top: 1em;
  }

  @media (min-width: 1150px) {
    display: flex;
    justify-content: space-between;
    gap: 0 32px;

    label {
      margin-top: 1em;
    }
    // Selecting child div (InputWrappers)
    > div:nth-child(1) {
      position: relative;
      width: 229px;
    }

    > div:nth-child(2) {
      width: 464px;
    }

    > div:nth-child(3) {
      width: 364px;
    }
  }
`

export const SecondRow = styled.div`
  .tags-wrapper {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(60px, 100px));
  }

  > div:nth-child(2) {
    margin-top: 1em;

    input {
      background-color: ${({ theme }) => theme.COLORS.DARK_800} !important;
    }

    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  }

  @media (min-width: 1150px) {
    display: grid;
    align-items: center;
    justify-content: space-between;
    gap: 2em;
    grid-template-columns: 818px auto;

    > div:first-child {
      margin-top: 1em;
    }
  }
`

export const TagsWrapper = styled.div`
  background-color: ${({ theme }) => theme.COLORS.DARK_800};

  padding: 8px;
  border-radius: 5px;

  display: grid;
  align-items: center;
  justify-content: center;
  grid-template-columns: repeat(auto-fit, minmax(80px, 120px));
  gap: 0.5em;

  > div {
    width: 100%;
  }

  svg {
    animation: transform 0.5s;
  }

  button:hover {
    background-color: transparent;
    svg {
      transform: scale(1.15);
      animation: transform 0.5s;
    }
  }

  @media (min-width: 1150px) {
    justify-content: start;
  }
`

export const ThirdRow = styled.div`
  margin-top: 2em;

  > div {
    display: flex;
    gap: 32px;
    justify-content: flex-end;
  }

  textarea {
    ${({ theme }) => theme.FONTS.ROBOTO_SMALL_REGULAR}
  }

  button {
    margin-top: 32px;

    &:hover {
      background-color: ${({ theme }) => theme.COLORS.TOMATO_200};
    }
  }
`

export const Select = styled.div`
  position: relative;

  .Listbox-Root {
    position: relative;
  }

  .Listbox-Button {
    width: 100%;
    height: 48px;
    padding: 13px 16px;

    &:focus {
      outline: none;
    }

    display: flex;
    align-items: center;
    justify-content: space-between;

    border: none;
    background-color: ${({ theme }) => theme.COLORS.DARK_800};

    ${({ theme }) => theme.FONTS.ROBOTO_SMALLEST_REGULAR};
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
    text-align: left;

    & > svg:hover {
      transform: scale(1.1);
    }
  }

  .Listbox-options {
    position: absolute;
    top: 100%;
    right: 0;
    left: 0;
  }

  .Listbox-option {
    display: flex;
    align-items: center;

    padding: 8px 32px;
    list-style-type: none;

    ${({ theme }) => theme.FONTS.ROBOTO_SMALLEST_REGULAR};

    background-color: ${({ theme }) => theme.COLORS.DARK_900};
    box-shadow: 0 2px 10px ${({ theme }) => theme.COLORS.DARK_1000};

    cursor: pointer;

    &:last-child {
      border-radius: 0 0 5px 5px;
    }

    &:hover {
      background-color: ${({ theme }) => theme.COLORS.CAKE_100};
    }

    svg {
      position: absolute;
      left: 12px;

      width: 12px;
      height: 12px;
      margin-right: 5px;

      color: ${({ theme }) => theme.COLORS.MINT_100};
    }
  }
`
