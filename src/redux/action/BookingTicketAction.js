import { DAT_GHE, HUY_GHE } from "./type/BookingTicketType"

export const datVeAction = (ghe) => {
    return {
        type: DAT_GHE,
        ghe
    }
}

export const huyVeAction = (soGhe) => {
    return {
        type: HUY_GHE,
        soGhe
    }
}