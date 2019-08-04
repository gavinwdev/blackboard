import { directive } from '../view';
import * as utils from '../utility';

directive('b-show', function (ele, binding) {
    ele.style.display = binding.compute() ? 'initial' : 'none';
});

directive('b-hide', function (el, binding) {
    el.style.display = binding.compute() ? 'none' : 'initial';
});

directive('b-if', {
    props: {
        comment: null
    },
    onInserted: function (ele, binding) {
        if (!binding.compute()) {
            this.comment = document.createComment(ele.innerHTML);
            utils.replace(ele, this.comment);
        }
    },
    onUpdate: function (ele, binding) {
        if (binding.compute()) {
            if (this.comment) {
                utils.replace(this.comment, ele);
                this.comment = null;
            }
        }
        else {
            if (!this.comment) {
                this.comment = document.createComment(ele.innerHTML);
                utils.replace(ele, this.comment);
            }
        }
    }
});

directive('b-bind', function(ele, binding){
    ele.innerText = binding.compute();
});

directive('b-model', {
    onInserted: function (ele, binding, com) {
        this.$update(ele, com);

        if(com == null){
           ele.addEventListener('change', function(e){
                utils.setProperty(binding.scope, binding.text, e.target.value);
           });
        }
        else{
            if(utils.isMessenger(com.change)){
                com.change.on(function(e, args){
                    utils.setProperty(binding.scope, binding.text, args.newvalue);
                });
            }
            throw new Error('Compoent ' + com.$key + 'must define [change] event');
        }
    },
    onUpdate:function(ele, binding, com){
        if(com == null){
            ele.value = binding.compute();
         }
         else{
             com.value = binding.compute();
         }
    }
});


directive('b-repeat', function (ele) {

});