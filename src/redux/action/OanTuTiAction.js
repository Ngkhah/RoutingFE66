import { CHON_KBB, END_GAME, RAN_DOM } from './type/OanTuTiType'

export const cuocOanTuTi = (maCuoc) => {
    return {
        type: CHON_KBB,
        maCuoc
    }
}

export const randdom = () => {
    return {
        type: RAN_DOM,

    }
}

export const endGame = () => {
    return {
        type: END_GAME,
    }
}