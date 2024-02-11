import { styled } from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    width: 24rem;
    padding: 1rem 1.3rem;
`

export const ContainerImg = styled.div`
    width: 22%;
    display: flex;
  flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const Img = styled.img`
    width: 3.5rem;
    height: 3.5rem;
    border-radius: 50%;
`

export const ContainerMain = styled.div`
    display: flex;
    justify-content: space-between;
  flex-direction: column;
    align-items: center;
    width: 76%;
    height: 100%;
    margin-left: 1%;
`

export const MainText = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
  justify-content: center;
    height: 100%;

    h1 {
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
