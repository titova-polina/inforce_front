import {
  StyledHeader,
  StyledHeaderWrapper,
  StyledLogo,
  StyledLogoDark,
} from "./styled";

export const Header = () => {
  return (
    <StyledHeader>
      <StyledHeaderWrapper>
        <StyledLogo>
          In
          <StyledLogoDark>force</StyledLogoDark>
        </StyledLogo>
      </StyledHeaderWrapper>
    </StyledHeader>
  );
};
