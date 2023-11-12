var vm=new Vue({
    el:'.Number',
    data:{
        
    },
    methods:{
        appendToScreen(value){
            const screen=document.getElementById('area');
            screen.textContent+=value;
        }
    }
});

