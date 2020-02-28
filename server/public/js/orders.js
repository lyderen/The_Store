var ordersCtrl = function ($scope,$http) {
    
var ctrl = this;

 ctrl.search = '';
 ctrl.rows = [];
 ctrl.showModalEdit = false;
 ctrl.showModalCreate =  false;
 
     const run = () => {
        
        $http.get('/orders').then((res) => {
        
            ctrl.rows = res.data
           }).catch((err) => {
               console.log(err)
           })

     }
   

     ctrl.openEdit = () => {
      ctrl.showModalEdit = true

     }

     ctrl.openCreate = () => {
        ctrl.order  = {
            item_quantity: null,
            item_id: null,
            total_price: null,
            item_name: ''
        };
         ctrl.showModalCreate = true;
     }
     
        ctrl.editOrder = (order) => {
            
            ctrl.order = order
            ctrl.openEdit();
        }

     ctrl.update = () => {

         var obji = {
             order_id: ctrl.order.order_id,
             item_quantity: ctrl.order.item_quantity,
             item_id: ctrl.order.item_id,
             total_price: ctrl.order.total_price
         }
           
         
         $http.post('/updateorder',{obji}).then((res) => {
         
             ctrl.answer = res
             run();
            }).catch((err) => {
                console.log(err)
            })

            
     }

     ctrl.send = () => {

         var order = ctrl.order

       $http.post('/addorder',{order}).then((res) => {
         
         ctrl.answer = res
         run()
        }).catch((err) => {
            console.log(err)
        })
      
   }


     ctrl.delete = (order) => {

          var id = ctrl.order.order_id;
         $http.post('/deleteorder',{id}).then((res) => {
        
            ctrl.rows = res
           }).catch((err) => {
               console.log(err)
           })
        
        run()
        
     }
     run();
}


angular.module('app').component('orders', {
    templateUrl: 'pages/orders.html',
    controller: ordersCtrl,
    bindings: {
      
    }
  });