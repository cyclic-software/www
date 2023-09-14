<template>
  <section class="section common-section w-full gap-10">
    <div class="common-section pt-20">
      <!-- ********* PILL TEXT ********* -->
      <Pill text="A bot use case" />
      
      <!-- ********* CTA TEXTS ********* -->
      <div class="space-y-6">
        <h2 class="font-extrabold text-4xl lg:text-5xl text-center capitalize">
          ChatOps: an admin bot
        </h2>
    
        <p class="text-center text-neutral-300">
          Use Cyclic to automate admin ops with a bot.
        </p>
      </div>
    </div>

    <!-- ********* CHATOPS CONTENT ********* -->
    <div class="mt-10 space-y-16">
      <!-- ********* CONTENT ********* -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div class="bg-neutral-800 w-full h-full p-8">
          h
        </div>
  
        <div class="text-neutral-300 leading-[150%] space-y-5">
          <p>
            Lorem ipsum dolor sit amet consectetur. Egestas enim id tortor semper egestas justo integer iaculis. Tincidunt vitae est libero auctor adipiscing ut aliquam amet. In leo sem mauris at rutrum integer pharetra. Euismod dui gravida nascetur quis sollicitudin tempus arcu aenean sit. Pellentesque porta a vitae venenatis tellus venenatis.
          </p>
  
          <p>
            Dui in elit lacus vitae pulvinar aenean. Duis suscipit et vel egestas dolor est tincidunt elementum fermentum. Id ipsum consectetur scelerisque vestibulum varius. Tincidunt nulla facilisis augue 
          </p>
        </div>
      </div>

      <!-- ********* BENEFITS ********* -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <div class="space-y-5">
          <div class="w-20 h-20 bg-neutral-800">

          </div>

          <h3 class="text-2xl">Benefit One</h3>

          <p class="text-neutral-300">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium eveniet dolore ab tempora quis debitis corrupti, facere quisquam aspernatur.
          </p>
        </div>

        <div class="space-y-5">
          <div class="w-20 h-20 bg-neutral-800">

          </div>

          <h3 class="text-2xl">Benefit Two</h3>

          <p class="text-neutral-300">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium eveniet dolore ab tempora quis debitis corrupti, facere quisquam aspernatur.
          </p>
        </div>

        <div class="space-y-5">
          <div class="w-20 h-20 bg-neutral-800">

          </div>

          <h3 class="text-2xl">Benefit Three</h3>

          <p class="text-neutral-300">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium eveniet dolore ab tempora quis debitis corrupti, facere quisquam aspernatur.
          </p>
        </div>
      </div>

      <!-- ********* TABS ********* -->
      <div class="space-y-8">
        <div class="border !border-neutral-700 p-2 rounded-2xl">
          <button
            class="px-4 py-2 rounded-xl capitalize font-medium transition"
            :class="tab === 'regular' ? 'bg-primary' : 'text-neutral-300'"
            @click="tab='regular'"
          >regular</button>

          <button
            class="px-4 py-2 rounded-xl capitalize font-medium transition"
            :class="tab === 'bursty' ? 'bg-primary' : 'text-neutral-300'"
            @click="tab='bursty'"
          >bursty</button>

          <button
            class="px-4 py-2 rounded-xl capitalize font-medium transition"
            :class="tab === 'intermittent' ? 'bg-primary' : 'text-neutral-300'"
            @click="tab='intermittent'"
          >intermittent</button>
        </div>

        <div class="">
          <div v-if="tab === 'regular'" class="space-y-8">
            <img src="/images/regular-graph.png" class="w-full" alt="regular">

            <!-- ********* COMPARISON ********* -->
            <div class="flex items-center justify-center gap-12">
              <!-- ********* CYCLIC ********* -->
              <div class="space-y-4 w-[400px]">
                <h3 class="text-xl">On demand price on Cyclic</h3>

                <div class="space-y-2">
                  <div class="flex items-center gap-2">
                    <i class="ri-check-line text-primary"></i>
                    <span class="text-neutral-300">10,000 requests</span>
                  </div>

                  <div class="flex items-center gap-2">
                    <i class="ri-check-line text-primary"></i>
                    <span class="text-neutral-300">1 environment</span>
                  </div>
                </div>

                <hr class="border-neutral-700">

                <div class="flex gap-2">
                  <span class="text-primary text-2xl font-bold">$</span>

                  <p class="text-7xl text-white font-semibold">
                    29
                  </p>

                  <div class="ml-1">/ month</div>
                </div>
              </div>

              <p class="text-sm uppercase font-semibold text-neutral-400">vs</p>

              <!-- ********* OTHERS ********* -->
              <div class="space-y-4 w-[400px]">
                <h3 class="text-xl">Provisioned capacity on other platforms</h3>

                <div class="space-y-2">
                  <div class="flex items-center gap-2">
                    <i class="ri-check-line text-primary"></i>
                    <span class="text-neutral-300">10,000 requests</span>
                  </div>

                  <div class="flex items-center gap-2">
                    <i class="ri-check-line text-primary"></i>
                    <span class="text-neutral-300">1 environment</span>
                  </div>
                </div>

                <hr class="border-neutral-700">

                <div class="flex gap-2">
                  <span class="text-primary text-2xl font-bold">$</span>

                  <p class="text-7xl text-neutral-200 font-semibold">
                    299
                  </p>

                  <div class="ml-1">/ month</div>
                </div>
              </div>
            </div>
          </div>

          <div v-if="tab === 'bursty'" class="space-y-8">
            <img src="/images/bursty-graph.png" class="w-full" alt="bursty">

            <!-- ********* COMPARISON ********* -->
            <div class="flex items-center justify-center gap-12">
              <!-- ********* CYCLIC ********* -->
              <div class="space-y-4 w-[400px]">
                <h3 class="text-xl">On demand price on Cyclic</h3>

                <div class="space-y-2">
                  <div class="flex items-center gap-2">
                    <i class="ri-check-line text-primary"></i>
                    <span class="text-neutral-300">10,000 requests</span>
                  </div>

                  <div class="flex items-center gap-2">
                    <i class="ri-check-line text-primary"></i>
                    <span class="text-neutral-300">1 environment</span>
                  </div>
                </div>

                <hr class="border-neutral-700">

                <div class="flex gap-2">
                  <span class="text-primary text-2xl font-bold">$</span>

                  <p class="text-7xl text-white font-semibold">
                    29
                  </p>

                  <div class="ml-1">/ month</div>
                </div>
              </div>

              <p class="text-sm uppercase font-semibold text-neutral-400">vs</p>

              <!-- ********* OTHERS ********* -->
              <div class="space-y-4 w-[400px]">
                <h3 class="text-xl">Provisioned capacity on other platforms</h3>

                <div class="space-y-2">
                  <div class="flex items-center gap-2">
                    <i class="ri-check-line text-primary"></i>
                    <span class="text-neutral-300">10,000 requests</span>
                  </div>

                  <div class="flex items-center gap-2">
                    <i class="ri-check-line text-primary"></i>
                    <span class="text-neutral-300">1 environment</span>
                  </div>
                </div>

                <hr class="border-neutral-700">

                <div class="flex gap-2">
                  <span class="text-primary text-2xl font-bold">$</span>

                  <p class="text-7xl text-neutral-200 font-semibold">
                    299
                  </p>

                  <div class="ml-1">/ month</div>
                </div>
              </div>
            </div>
          </div>

          <div v-if="tab === 'intermittent'" class="space-y-8">
            <img src="/images/intermittent-graph.png" class="w-full" alt="intermittent">

            <!-- ********* COMPARISON ********* -->
            <div class="flex items-center justify-center gap-12">
              <!-- ********* CYCLIC ********* -->
              <div class="space-y-4 w-[400px]">
                <h3 class="text-xl">On demand price on Cyclic</h3>

                <div class="space-y-2">
                  <div class="flex items-center gap-2">
                    <i class="ri-check-line text-primary"></i>
                    <span class="text-neutral-300">10,000 requests</span>
                  </div>

                  <div class="flex items-center gap-2">
                    <i class="ri-check-line text-primary"></i>
                    <span class="text-neutral-300">1 environment</span>
                  </div>
                </div>

                <hr class="border-neutral-700">

                <div class="flex gap-2">
                  <span class="text-primary text-2xl font-bold">$</span>

                  <p class="text-7xl text-white font-semibold">
                    29
                  </p>

                  <div class="ml-1">/ month</div>
                </div>
              </div>

              <p class="text-sm uppercase font-semibold text-neutral-400">vs</p>

              <!-- ********* OTHERS ********* -->
              <div class="space-y-4 w-[400px]">
                <h3 class="text-xl">Provisioned capacity on other platforms</h3>

                <div class="space-y-2">
                  <div class="flex items-center gap-2">
                    <i class="ri-check-line text-primary"></i>
                    <span class="text-neutral-300">10,000 requests</span>
                  </div>

                  <div class="flex items-center gap-2">
                    <i class="ri-check-line text-primary"></i>
                    <span class="text-neutral-300">1 environment</span>
                  </div>
                </div>

                <hr class="border-neutral-700">

                <div class="flex gap-2">
                  <span class="text-primary text-2xl font-bold">$</span>

                  <p class="text-7xl text-neutral-200 font-semibold">
                    299
                  </p>

                  <div class="ml-1">/ month</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="flex flex-col gap-2 items-center border !border-neutral-700 bg-neutral-800/20 rounded-2xl p-10
      space-y-5 text-center">
        <h2 class="text-3xl font-semibold">Deploy a ChatOps bot now</h2>

        <hr class="border-primary w-10">

        <p class="text-neutral-300 w-full md:w-[50%] leading-[160%]">
          We have the starter template ready, all you have to do is press ‘Deploy’.
        </p>

        <div class="flex items-center gap-2">
          <a
            href="https://app.cyclic.sh/api/login"
            class="bg-primary text-white capitalize flex items-center justify-center rounded-xl px-4 py-3
            gap-2 hover:no-underline hover:scale-105 transition w-full md:w-[250px]"
          >
            Deploy
          </a>
          
          <a
            href="https://cyclic.typeform.com/to/HNNO8Bkp"
            class="border !border-neutral-500 text-white capitalize flex items-center justify-center rounded-xl px-4 py-3
            gap-2 hover:no-underline hover:!border-white transition w-full md:w-[250px]"
            target="_blank"
          >
            Talk to an Engineer
            <i class="ri-arrow-right-up-line"></i>
          </a>

        </div>
      </div>

    </div>

  </section>
</template>

<script>
  export default {
    data() {
      return {
        tab: 'regular'
      }
    }
  }
</script>