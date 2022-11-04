<template>
    <b-container >
        <div class=" feature-container">
        <b-row>
            <b-col  align-self="center" sm="2">
                <div class="f-header">Runtimes</div>
            </b-col>
            <b-col class="build-things" align-self="center">
                <div class="build-thing">
                    <i class="fab fa-js"></i> JavaScript / TypeScript
                </div>
                <div class="build-thing">
                    <i class="fab fa-python"></i> Python <sup><small>Coming Soon</small></sup>
                </div>
                <div class="build-thing">
                    <i class="fas fa-tools"></i> Custom <sup><small>Coming Soon</small></sup>
                </div>
            </b-col>
        </b-row>
    </div>
  </b-container>

</template>

<style scoped>
.f-header{
    font-size:20px;
    font-weight:500;
    text-align: center;;
    color: var(--h-white);
    border-right: 2px solid var(--h-white);
}
h4 {
    color: var(--h-white);
    font-size: 20px;
}
.feature-container{
    /* border: 1px solid #152553; */
    padding: 20px;
    border-radius: 8px;;
    box-shadow: 0px 0px 60px 4px #162859;
}

/* @keyframes glow{
  to {
    box-shadow: 0px 0px 30px 20px #535FED;
  }
} */
.build-things{
    display: flex
}
.build-thing{
    margin: 0 40px;
    /* width: 20%; */
    /* height: 30px; */
    text-align: center;;
    font-size: 20px;
    font-weight: 100;
}

.build-thing i{
        margin-right: 5px;
    }
    
@media screen and (max-width: 991px) {
    .feature-container{
        margin: 15px auto;
        padding: 30px;
        margin-bottom: 60px;
        box-shadow: 0px 0px 120px 4px #101e44;
    }
    .f-header{
        border-right: none;
        margin-bottom: 30px;;
    }
    .build-things{
        display: grid;
        grid-template-columns: 1fr;
        row-gap: 15px;
    }
    .build-thing{
        /* text-align: left; */
        color: var(--h-white)
    }
    .build-thing i{
        margin-right: 5px;
    }
  }
  
</style>