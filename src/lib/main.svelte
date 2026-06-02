<script lang="ts">
    let playerName = "ROSE VAYNEYAHOOOOOOOO";
    import Transection from './components/transection.svelte';
    import InputSection from './components/inputSection.svelte';
    import Logo from '../assets/logo.png'
    import TopSection from './components/topSection.svelte';
    import { fly } from 'svelte/transition';
    import History from './components/history.svelte';
    
</script>

<main class="container">
    <section class="mainItem" >
        <div class="LeftSection" in:fly={{duration:200 , y:5}} out:fly={{duration:200, y:5 ,delay:100}}>
            <div class="textTop">
                <p class="HeaderText">BANK</p>
                <p class="HeaderText info">RAVEN COMUNITY</p>
            </div>
            <div class="logoSection">
                <img src={Logo} alt="">
            </div>
            <div class="textBottom">
                <p class="footerLeftSectionText">welcome</p>
                <p class="footerLeftSectionText playername">{playerName}</p>
            </div>
        </div>
        <div class="rightSection" in:fly={{ duration:200 , y:5 , delay:100 }} out:fly={{duration:200, y:5}}>
            <TopSection/>
            <Transection/>
            <InputSection/>
            <History/>
        </div>
    </section>
</main>

<style>

    .container {
        width: 100vw;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .mainItem {
        min-width: 80vh;
        height: 50vh;
        /* background-color: rgba(0, 0, 0, 0.25); */
        display: flex;
        gap: calc(10*var(--px));
    }

    .LeftSection {
        width: 25vh;
        min-width: 25vh;
        height: inherit;
        background: url(../assets/leftSection.png);
        background-size: contain;
        background-repeat: no-repeat;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: calc(40 * var(--px));
        padding-bottom: calc(103 *var(--px));
        filter: drop-shadow(0 0 calc(6*var(--px)) rgba(0,0,0,0.25));
        box-sizing: border-box;
        background-color: rgba(0, 0, 0, 0.25);
    }

    .HeaderText {
        font-family: "Conthrax";
        font-size: calc(52 * var(--px));
    }

    .HeaderText.info {
        font-size: calc(16 * var(--px));
    }

    .logoSection {
        width: calc(240 * var(--px));
        height: calc(240 * var(--px));
        background-color: rgba(0, 0, 0, 0.25);
        box-shadow: inset 0 0 calc(24*var(--px)) rgba(255, 255, 255, 0.5);
        border-radius: 50%;
        margin-left: calc(3*var(--px));
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .logoSection > img{
        width: calc(250*var(--px));
        margin-bottom: calc(-40*var(--px));
        margin-left: calc(15*var(--px));
    }

    .textTop , .textBottom{
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .footerLeftSectionText {
        color: #3ae998;
        text-transform: uppercase;
        font-weight: 500;
        font-size: calc(24 * var(--px));
    }

    .footerLeftSectionText.playername {
        color: aliceblue;
        font-size: calc(32 * var(--px));
        width: calc(300 * var(--px));
        background-color: rgba(0, 0, 0, 0.25);
        text-wrap: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
    }

    .rightSection{
        display: flex;
        flex-direction: column;
        gap: calc(5*var(--px));
        width: calc(1020*var(--px));
        max-width: calc(1020*var(--px));
        background-color: rgba(0, 0, 0, 0.25);
    }
</style>
