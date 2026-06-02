<script lang="ts">
    import { isBankState, type BankState } from "../../stores/stores";
    type Pages = BankState['CurrentPage']
    const thisCurrentPage:Record<Pages,BankState> = {
        deposit:{
            isOpen:true,
            CurrentPage:'deposit'
        },
        withdraw:{
            isOpen:false,
            CurrentPage:'withdraw'
        },

        transfer:{
            isOpen:false,
            CurrentPage:'transfer'
        }
    }

    function SwitchPage(page:Pages){
        isBankState.update(state => ({...state,CurrentPage: page}))
    }

</script>

<div class="buttonSection">
    {#each Object.entries(thisCurrentPage) as [page, state]}
        <button onclick={() => SwitchPage(state.CurrentPage)}>
            <p class="textSection">
                <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    class:active={$isBankState.CurrentPage === state.CurrentPage}
                >
                    <path
                        d="M15.16 3.35168V11.8317C15.1574 12.7167 14.8046 13.5647 14.1788 14.1905C13.553 14.8163 12.705 15.1691 11.82 15.1717H3.34C2.45498 15.1691 1.60697 14.8163 0.981171 14.1905C0.35537 13.5647 0.00263791 12.7167 0 11.8317V3.35168C0.00263791 2.46667 0.35537 1.61866 0.981171 0.992859C1.60697 0.367058 2.45498 0.0142956 3.34 0.0116577C3.62378 0.0116577 3.89592 0.124409 4.09659 0.325073C4.29725 0.525737 4.41 0.797883 4.41 1.08167C4.41 1.36545 4.29725 1.63759 4.09659 1.83826C3.89592 2.03892 3.62378 2.15167 3.34 2.15167C3.02174 2.15167 2.7165 2.27807 2.49146 2.50311C2.26641 2.72816 2.13998 3.03342 2.13998 3.35168V11.8317C2.13998 12.1499 2.26641 12.4551 2.49146 12.6802C2.7165 12.9052 3.02174 13.0317 3.34 13.0317H11.84C11.9971 13.0317 12.1527 13.0006 12.2977 12.9401C12.4427 12.8797 12.5744 12.7912 12.685 12.6796C12.7956 12.5681 12.8831 12.4357 12.9423 12.2902C13.0015 12.1446 13.0313 11.9888 13.03 11.8317V3.35168C13.0313 3.19457 13.0015 3.03872 12.9423 2.89319C12.8831 2.74765 12.7956 2.61529 12.685 2.50372C12.5744 2.39216 12.4427 2.30365 12.2977 2.24323C12.1527 2.1828 11.9971 2.15167 11.84 2.15167C11.5562 2.15167 11.2841 2.03892 11.0834 1.83826C10.8827 1.63759 10.77 1.36545 10.77 1.08167C10.77 0.797883 10.8827 0.525737 11.0834 0.325073C11.2841 0.124409 11.5562 0.0116577 11.84 0.0116577C12.7215 0.0195486 13.5644 0.374643 14.1859 0.999878C14.8074 1.62511 15.1574 2.47012 15.16 3.35168ZM6.64999 3.97168V7.72168C6.64999 7.96833 6.74798 8.20486 6.92239 8.37927C7.0968 8.55368 7.33334 8.65167 7.57999 8.65167C7.82664 8.65167 8.0632 8.55368 8.23761 8.37927C8.41202 8.20486 8.51001 7.96833 8.51001 7.72168V3.96167C8.93204 3.75197 9.27081 3.40578 9.47134 2.97931C9.67188 2.55284 9.72239 2.07116 9.61469 1.61237C9.50698 1.15358 9.2474 0.744653 8.87805 0.451965C8.5087 0.159278 8.05125 0 7.57999 0C7.10873 0 6.6513 0.159278 6.28195 0.451965C5.9126 0.744653 5.65302 1.15358 5.54532 1.61237C5.43762 2.07116 5.48813 2.55284 5.68866 2.97931C5.88919 3.40578 6.22796 3.75197 6.64999 3.96167V3.97168Z"
                        fill="url(#paint0_linear_393_386)"
                    />
                    <defs>
                        <linearGradient
                            id="paint0_linear_393_386"
                            x1="7.58"
                            y1="15.1717"
                            x2="7.58"
                            y2="0.0116836"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop offset="0.88" stop-color="#D0D1D2" />
                        </linearGradient>
                    </defs>
                </svg>
                {state.CurrentPage}
            </p>
            <span
                class="lightStatus"
                class:deposit={$isBankState.CurrentPage === 'deposit' && $isBankState.CurrentPage == state.CurrentPage}
                class:withdraw={$isBankState.CurrentPage === 'withdraw' && $isBankState.CurrentPage == state.CurrentPage}
                class:transfer={$isBankState.CurrentPage === 'transfer' && $isBankState.CurrentPage == state.CurrentPage}
            ></span>
        </button>
    {/each}
</div>

<style>
    .buttonSection {
        display: flex;
        gap: calc(2.5 * var(--px));
        background: url(../../assets/groupSecond.png);
        background-repeat: no-repeat;
        background-size: contain;
        width: inherit;
        height: calc(85 * var(--px));
        background-color: rgba(255, 255, 255, 0.25);
        filter: drop-shadow(0 0 calc(6*var(--px)) rgba(0,0,0,0.25));
    }

    button {
        background: none;
        outline: unset;
        border: unset;
        cursor: pointer;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: calc(340 * var(--px));
        height: calc(83 * var(--px));
        gap: calc(4 * var(--px));
        font-family: "Conthrax";
        text-transform: uppercase;
        font-size: calc(22 * var(--px));
        /* background-color: rgba(255, 255, 255, 0.25); */
        color: #d0d1d2;
    }

    .textSection{
        display: flex;
        align-items: center;
        gap: calc(5*var(--px));
    }

    .textSection > svg{
        transition: transform 300ms ease;
    }

    svg.active{
        transform: rotate(90deg);
    }

    .lightStatus {
        position: relative;
        width: calc(100 * var(--px));
        height: calc(4 * var(--px));
        background-color: rgba(0, 0, 0, 0.25);
        border-radius: 1.2vh;
        transition: background-color 200ms ease;
    }
    
    .lightStatus.deposit{
        background-color: #3AE998;
    }
    .lightStatus.withdraw{
        background-color: #ED1C24;
    }
    .lightStatus.transfer {
        background-color: #f26522;
    }
</style>
