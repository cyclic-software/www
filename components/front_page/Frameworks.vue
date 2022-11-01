<template>
    <b-container class="mt-5">
        <b-row>
            <b-col sm="2" align-self="center">
                <h3>Build Anything</h3>
            </b-col>
            <b-col class="build-things">
                <div class="build-thing">
                    <h3>Frontends</h3>
                    <div><i class="fas fa-window-maximize"></i></div>
                </div>
                <div class="build-thing">
                    <h3>Backends</h3>
                    <div><i class="fas fa-server"></i></div>
                </div>
                <div class="build-thing">
                    <h3>APIs</h3>
                    <div><i class="fas fa-server"></i></div>
                </div>
                <div class="build-thing">
                    <h3>Data</h3>
                    <div><i class="fas fa-server"></i></div>
                </div>
                <div class="build-thing">
                    <h3>Bots</h3>
                    <div><i class="fas fa-server"></i></div>
                </div>
                <div class="build-thing">
                    <h3>Cron</h3>
                    <div><i class="fas fa-server"></i></div>
                </div>
            </b-col>
        </b-row>
  </b-container>

</template>

<style scoped>
.build-things{
    display: flex
}
.build-thing{
    width: 20%;
    margin: 10px;
    /* display */
}
.build-thing h3{
    font-size: 24px;
}
</style>