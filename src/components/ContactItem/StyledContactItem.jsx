import { styled } from 'styled-components';
import avatar from '../../img/avatar.jpg';
export const ContactWrapper = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;

  align-items: center;

  padding: 10px;
  margin: auto;

  /* background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.textcolor};  */
`;
export const ContactInfo = styled.div`
  width: 100%;
  display: flex;
  gap: 40px;

  align-items: center;
`;

export const Card = styled.div`
  --size: 200px;
  width: var(--size);
  height: var(--size);
  background: ${({ theme }) => theme.colors.background};
  padding: 3rem 1.5rem;
  border-radius: 20px;
  transition: box-shadow 0.3s ease, transform 0.2s ease;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
    rgba(0, 0, 0, 0.22) 0px 15px 12px;
`;

export const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: transform 0.2s ease, opacity 0.2s ease;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;
export const CardTitle = styled.div`
  color: ${({ theme }) => theme.colors.textColor};
  font-size: 1.5em;
  font-weight: 500;
  line-height: 2rem;
  text-align: center;
`;

export const CardSubtitle = styled.div`
  color: ${({ theme }) => theme.colors.textColor};
  font-size: 1em;
  font-weight: 500;
  line-height: 1rem;
  text-align: center;
`;
/*Image*/
export const CardAvatar = styled.div`
  --size: 100px;

  background-image: ${props => {
    return `url(${avatar})`;
  }};
  background-size: cover;
  width: var(--size);
  height: var(--size);
  border-radius: 50%;
  transition: transform 0.2s ease;
  margin-bottom: 1rem;
`;

export const Options = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  margin-top: 10px;
`;
