var createOrderCtrl = function ($http) {

    var ctrl = this;
    ctrl.state = this.order    
     
    ctrl.state.start =  new Date().getTime()

    
    $http.get('/allitems').then((res) => {
        
        ctrl.rows = res.data
       }).catch((err) => {
           console.log(err)
       })
     
    ctrl.closeModal = () => {
        ctrl.show = false
        ctrl.state = {};
        this.order = {};
    }
    
    ctrl.calcTotal = (i) => {
        
        var amount = ctrl.state.item_quantity ;
        var ite = ctrl.state.item_id;
        var item = ctrl.rows.filter((n) => n.item_id == ite )   

         ctrl.state.item_name = item[0].item_name;
         ctrl.state.total_price = item[0].price * amount; 

    }

    ctrl.cunfirm = () => {
            
     ctrl.state.end = new Date().getTime();   
       
     ctrl.send(ctrl.state);
        
     ctrl.closeModal()

    }
    
}


angular.module('app').component("createOrder",{
    templateUrl: "pages/createOrder.html",
    controller: createOrderCtrl,
    bindings:{
        show: "=",
        send: "&",
        order: "="
    }
})