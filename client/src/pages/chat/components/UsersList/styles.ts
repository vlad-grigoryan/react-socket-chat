import { styled } from 'styled-components'

export const Container = styled.div`
    display: flex;
  flex-direction: column;
`
export const ContainerImg = styled.div`
    width: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row-reverse;
  padding: 0.5rem 0;
`

export const Img = styled.img`
    width: 3.5rem;
    height: 3.5rem;
    border-radius: 50%;
`

export const MainText = styled.div`
    display: flex;
  padding: 1rem;
    align-items: center;
    width: 100%;
    height: 100%;

    h2 {
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
    small: {
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
`
