import { writable } from "svelte/store";

interface systemState{
    isOpenNUI:boolean
}

export interface BankState{
    isOpen:boolean
    CurrentPage:'deposit'|'withdraw'|'transfer'
}

interface PlayerState{
    currentMoney:number
    currentId:number
    name:string
}

export const isBankState = writable<BankState>({
    isOpen:false,
    CurrentPage:'deposit'
})

export const isPlayerState = writable<PlayerState>({
    currentMoney:0,
    currentId:0,
    name:'val hawly'
})


export const nui = writable<systemState>({
    isOpenNUI:true
})