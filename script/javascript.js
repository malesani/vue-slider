const app = new Vue({

  el : '#app',
  data:{

    counterFoto:0,
    fotos:[
      'img/foto1.jpg',
      'img/foto2.jpg'
    ]


  },

  methods:{
    nextFoto(){
      this.counterFoto++;
      if(this.counterFoto === this.fotos.length){ 
        this.counterFoto = 0;
      }
    },

    prevFoto(){
      this.counterFoto--;
      if(this.counterFoto < 0){ 
        this.counterFoto = this.fotos.length -1;
      }
    }
  }









})