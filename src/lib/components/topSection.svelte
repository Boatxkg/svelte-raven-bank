<script lang="ts">

</script>

<div class="rightHeaderSection">
    <p class="textHeader">YOUR BALANCE</p>
    <p class="textAmount">$10,000</p>
</div>

<style>
     .rightHeaderSection{
        width: calc(1020*var(--px));
        height: calc(140*var(--px));
        background: url(../../assets/topSection.png);
        background-repeat: no-repeat;
        background-size: contain;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        filter: drop-shadow(0 0 calc(6*var(--px)) rgba(0,0,0,0.25));
     }
     .textHeader{
        color: aliceblue;
        font-size: calc(21*var(--px));
        font-weight: 500;
        margin-bottom: calc(-10*var(--px));
     }
     .textAmount{
        color:#73BF91;
        font-size: calc(36*var(--px));
        font-weight: 500;
     }
</style>