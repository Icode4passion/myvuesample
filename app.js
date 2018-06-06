new Vue({
    el:'#vue-app',
    data:{
        name : "Mahesh",
        website:'http://www.google.com',
        websiteUrl:'<a href="http://www.google.com">Google Web</a>'
    },
    methods :{
        greet :
            function(time){
                return "Hi There Good " + " " + time +" "+ this.name
        }
    }
})

new Vue({
    el:"#vue-app2",
    data:{
        name:"mahesh",
        age:25
    },
    methods:{
        add : function(inc){
             this.age += inc;
        },
        sub:function(dec){
            this.age -= dec;
        },
        greet:function(){
            alert("Hello Vue Js " + this.name)
        }
    }
})


new Vue({
    el:"#vue-app3",
    data:{
        name: "Mahesh",
        age:25


    },

    methods:{
        logName :function(){
            console.log('name has entered ...')
        },
        logAge :function(){
            console.log('age has entered ...')
        }

    }
})



new Vue({
    el:"#vue-app4",
    data:{
        england:'',
        india:''

    }
})


new Vue({
    el:"#vue-app5",
    data:{
        age:20,a:0,b:0
    },
    methods:{
        // addtoA:function(){
        //     console.log('addtoA')
        //     return  this.age + this.a
        // },
        // addtoB:function(){
        //     console.log('addtoB')
        //     return this.b+this.age
        // }
    },
    computed:{
        addtoA:function(){
            console.log('addtoA')
            return  this.age + this.a
        },
        addtoB:function(){
            console.log('addtoB')
            return this.b+this.age
        }

    }

})

var app6 = new Vue({
    el:"#vue-app6",
    data:{
        error : false,
        success : false

    },
})


var app7 = new Vue({
    el:"#vue-app7",
    data:{
        characters : ['Bheem','Raju','Chutki','Dolu Bolu'],
        ninjas:[
            {name : 'Ram' , age : '10'},
            {name : 'Sita' , age : '11'},
            {name : 'Lax' , age : '9'}
        ]
    }
})
