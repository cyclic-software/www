
export default {
    data(){
        console.log(process)
        return{
            // window: window,
            // console: console             

        }
    },
    methods:{
        async ga_event(event_name, callback){
            try{
                  await gtag('event', event_name, {
                  'event_label' : window.location.href,
                  'event_category' : event_name,
                  'event_callback': callback
                  });  
              }catch(e){ 
                 callback()
              }
        }
      }
  }