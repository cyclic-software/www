<template>
  <div
    class="flex items-center gap-2 cursor-pointer"
    @click="() => { $router.push('/') }"
  >
    <svg class="h-10 w-auto" viewBox="0 0 46 95" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 39.4075H22.2347L33.0741 46.4445H11.1173L0 39.4075Z" class="fill-primary dark:fill-white"/>
      <path d="M2.11108 28.8518H22.9265L33.074 46.4444H12.5188L2.11108 28.8518Z" class="fill-primary dark:fill-white" fill-opacity="0.75"/>
      <path d="M4.9259 18.2964H23.849L33.0741 46.4445H14.3875L4.9259 18.2964Z" class="fill-primary dark:fill-white" fill-opacity="0.65"/>
      <path d="M8.44446 8.44434H25.0022L33.0741 46.4443H16.7233L8.44446 8.44434Z" class="fill-primary dark:fill-white" fill-opacity="0.4"/>
      <path d="M11.963 0H26.1553L33.0741 46.4444H19.0591L11.963 0Z" class="fill-primary dark:fill-white" fill-opacity="0.25"/>
      <path d="M45.037 55.5925H22.8023L11.9629 48.5555H33.9197L45.037 55.5925Z" class="fill-primary dark:fill-white"/>
      <path d="M42.9258 66.1482H22.1104L11.9629 48.5556H32.5181L42.9258 66.1482Z" class="fill-primary dark:fill-white" fill-opacity="0.75"/>
      <path d="M40.111 76.7036H21.1879L11.9629 48.5555H30.6495L40.111 76.7036Z" class="fill-primary dark:fill-white" fill-opacity="0.65"/>
      <path d="M36.5925 86.5557H20.0348L11.9629 48.5557H28.3137L36.5925 86.5557Z" class="fill-primary dark:fill-white" fill-opacity="0.4"/>
      <path d="M33.074 95H18.8817L11.9629 48.5556H25.9779L33.074 95Z" class="fill-primary dark:fill-white" fill-opacity="0.25"/>
    </svg>

    <span v-if="!hideText" class="!font-display font-semibold text-2xl text-black dark:text-white">cyclic</span>
  </div>
</template>

<script>
  export default {
    name: 'Brand',
    props: ['hideText']
  }
</script>