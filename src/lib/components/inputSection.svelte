<script lang="ts">
    import { isBankState } from "../../stores/stores";
    import { fade,fly } from "svelte/transition";

    let counter  = $state(0)
    let uid = $state(0)
    let amountTemplate = [100,500,1000,5000,10000]
    let constrainedQuantity = $derived(
         Math.max(1, Math.min(counter, Infinity))
    );

    $effect(()=>{
        if(counter !== constrainedQuantity){
            counter = constrainedQuantity;
        }
    })
    
</script>

<div class="inputSection">
    <div class="inputTop">
        <p class="labelInput">
            <span
            class:spanDeposit={$isBankState.CurrentPage == 'deposit'}
            class:spanWithdraw={$isBankState.CurrentPage == 'withdraw'}
            class:spanTransfer={$isBankState.CurrentPage == 'transfer'}>{$isBankState.CurrentPage}</span> : ENTER AMOUNT</p>
        <div class="inputWrapper"
            class:deposit={$isBankState.CurrentPage == 'deposit'}
                class:withdraw={$isBankState.CurrentPage == 'withdraw'}
                class:transfer={$isBankState.CurrentPage == 'transfer'} >
            <span>$</span>
            <input 
            type="number" min="1"  class="TextInput"
            bind:value={counter} onchange={()=>constrainedQuantity} >
        </div>
    </div>

    <div class="inputBottom"
    >
    {#if $isBankState.CurrentPage ==='deposit' || $isBankState.CurrentPage==='withdraw'}
            <div class="boxButton" in:fly|global={{duration:100 ,y:5 ,delay:200 }} out:fade={{duration:200}} >
                {#each amountTemplate as item, i}
                    <button class="subButton" onclick={()=> counter += item}
                    in:fly|global={{duration:300 ,y:5,  delay:35*i }} 
                    out:fade={{duration:200}}>+{item}</button>
                {/each}
                <button class="subButton extra"  in:fly|global={{duration:300 ,y:5,  delay:175 }} >MAX</button>
                <button class="subButton confirm"  in:fly|global={{duration:300 ,y:5,  delay:210 }} >CONFIRM</button>
            </div>    
        {:else}
                <div class="boxButton" in:fly={{duration:100, y:5,delay:200}} out:fade={{duration:200}}>
                    <div class="boxTransfer" 
                    >
                        <p class="textTransfer">ENTER PLAYER ID</p>
                        <input type="number" class="inputTransfer" bind:value={uid}>
                    </div>
                    <button class="subButton confirm transfer" in:fly={{duration:100, y:5 ,delay:275}} out:fade={{duration:200}}>CONFIRM</button>
                </div>
        {/if}
    </div>    

</div>

<style>
/* normal-section  */
    .inputSection{
        display: flex;
        flex-direction: column;
        gap: calc(2*var(--px));
        overflow: hidden;
    }

    .inputTop{
        display: flex;
        flex-direction: column;
        background: url(../../assets/topSection.png);
        min-width: calc(1000*var(--px));
        width: calc(1020*var(--px));
        height: calc(140*var(--px));
        background-repeat: no-repeat;
        background-size: contain;
        justify-content: center;
        align-items: center;
        box-sizing: border-box;
        padding-bottom: calc(20*var(--px));
        filter: drop-shadow(0 0 calc(6*var(--px)) rgba(0,0,0,0.25));
    }


    .labelInput{
        text-transform: uppercase;
        color: aliceblue;
        font-size: calc(21*var(--px));
        font-weight: 500;
    }
    
    .spanDeposit,
    .spanWithdraw,
    .spanTransfer{
        transition: color 300ms ease;
    }

    .spanDeposit{
        color: #3AE998;
    }
    .spanWithdraw{
        color: #ED1C24;
    }
    .spanTransfer{
        color: #FF9959;
    }
    .inputBottom{
        display: flex;
        background-color: rgba(255,255,255,0.2);
        height: calc(50*var(--px));
        align-items: center;
    }

    .TextInput{
        /* border: calc(3*var(--px)) solid transparent;
        outline: unset;
        border-radius: 2vh;
        width: calc(500*var(--px));
        height: calc(40*var(--px));
        background: transparent;
        box-sizing: border-box;
        padding: 0vh 2vh;
        text-align: center;
        transition: background 235ms ease , border 235ms ease; */
        color: aliceblue;
        width: inherit;
        padding: 0vh 0.3vh;
        font-size: calc(21*var(--px));
        font-weight: 500;
        font-family: 'Kanit';
        background: unset;
        outline: unset; 
        border: unset;
        
    }
    .inputWrapper.deposit{
        border-color: #2F6F52;
        background: linear-gradient(to top,rgba(71,148,117,0.8), rgba(18,50,42,1));
    }
    .inputWrapper.withdraw{
        border-color: #C32A3A;
        background: linear-gradient(to top , rgba(148,52,56,0.8) , rgba(61,24,22,1));
    }
         
    .inputWrapper.transfer{
        border-color: #FF8E31;
        background: linear-gradient(to top, rgba(255,153,89,0.8) , rgba(65,41,28,1));
    }


    .inputWrapper{
        border: calc(3*var(--px)) solid transparent;
        outline: unset;
        border-radius: 2vh;
        width: calc(500*var(--px));
        height: calc(40*var(--px));
        background: transparent;
        box-sizing: border-box;
        padding: 0vh 2vh;
        text-align: center;
        transition: background 235ms ease , border 235ms ease;
        color: aliceblue;
        font-size: calc(21*var(--px));
        font-weight: 500;
        font-family: 'Kanit';
        display: flex;
        justify-content: center !important; 
        align-items: center;
    }

    button{
        margin: 0;
    }

    .boxButton{
        display: flex;
        gap: calc(13*var(--px));
        align-items: center;
    }
    .subButton{
        box-sizing: border-box;
        padding: 0vh calc(40.5*var(--px));
        border-radius: calc(8*var(--px));
        font-family: 'Kanit';
        font-weight: 500;
        font-size: calc(18*var(--px));
        color:#73BF91;
        border: none;
        cursor: pointer;
        min-height: calc(40*var(--px));
        max-height: calc(40*var(--px));
        background: linear-gradient(to top, rgba(42,47,50,0.8) 15% , rgba(62,67,70,0.8) 83%);
        box-shadow: inset 0 0 calc(8*var(--px)) rgba(255,255,255,0.8);
        filter: drop-shadow(0 0 calc(4*var(--px)) rgba(0,0,0,0.5));
        /* outline-offset: calc(3*var(--px)); */
        border: calc(3*var(--px)) solid rgba(0,0,0,0);
        outline: calc(3*var(--px)) solid transparent;
        transition: outline 300ms ease, box-shadow 300ms ease;
    }

    .subButton.confirm{
        padding: 0vh 2vh;
    }
      .subButton.confirm.transfer{
        padding: 0vh 3.2vh;
    }

    .subButton:hover,
    .subButton.confirm:hover{
        border: calc(3*var(--px)) solid rgba(0,0,0,0.25);
        outline-color: #73BF91;
        box-shadow: inset 0 0 calc(8*var(--px)) #A8FFC9;
    }


    /* transfer-section   */
    .boxTransfer{
        width: calc(830*var(--px));
        height: calc(49*var(--px));
        background: url(../../assets/transferbackground.png);
        background-repeat: no-repeat;
        background-size: contain;
        display: flex;
        align-items: center;
        box-sizing: border-box;
        padding-left: calc(320*var(--px));
        padding-bottom: calc(2*var(--px));
        gap: calc(10*var(--px));
        filter: drop-shadow(0 0 calc(4*var(--px)) rgba(0,0,0,0.25));

    }
    .textTransfer{
        /* background-color: rgba(255,255,255,0.2); */
        font-family: 'Conthrax';
        font-size: calc(21*var(--px));
        text-shadow: 0 0 0.7vh rgba(0,0,0,0.25);
        color: #D0D1D2;
    }

    .inputTransfer{
        background: linear-gradient(to bottom, #41291C ,#FF9959 );
        outline: unset;
        border: calc(2*var(--px)) solid #FF9959;
        border-radius: calc(24*var(--px));
        width: calc(200*var(--px));
        text-align: center;
        height: calc(27.5*var(--px));
        font-family: 'Kanit';
        color: aliceblue;
        font-size: calc(16*var(--px));
        font-weight: 500;
    }

    /* disabled-spin-button  */
    .inputTransfer::-webkit-inner-spin-button,
    .TextInput::-webkit-inner-spin-button{
        display: none;
    } 
</style>