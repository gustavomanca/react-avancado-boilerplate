import * as S from './styles'

const Main = () => (
  <S.Wrapper>
    <S.Logo
      src="/images/logo.svg"
      alt="An atom image with Advanced React wrote next to"
    />
    <S.Title>Advanced React</S.Title>
    <S.Description>TypeScript, NextJS and Styled Components</S.Description>
    <S.Illustration
      src="/images/hero-illustration.svg"
      alt="A developer in front a screen displaying programming codes"
    />
  </S.Wrapper>
)

export default Main
