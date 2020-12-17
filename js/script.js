var app = new Vue(
  {
    el: '#app',
    data: {
      discs: []
    },
    methods: {


    },
    mounted: function() {
      var self = this;

      axios
        .get('https://flynn.boolean.careers/exercises/api/array/music')
        .then( function(result) {
            self.discs = result.data.response;
            console.log(self.discs);
          }
        );
    }
  }
);
