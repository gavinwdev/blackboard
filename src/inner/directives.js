import { directive } from '../view';
import * as utils from '../utility';

directive('lg-show', function (el) {
    var value = this.$binding.compute();
    if (value) {
        el.style.display = 'initial';
    }
    else {
        el.style.display = 'none';
    }
});

directive('lg-hide', function (el) {
    var value = this.$binding.compute();
    if (value) {
        el.style.display = 'none';
    }
    else {
        el.style.display = 'initial';
    }
});

directive('lg-if', function (el) {
    var value = this.$binding.compute();
    if (value) {
        if (this.comment) {
            utils.replace(this.comment, el);
            this.comment = null;
        }
    }
    else {
        if (!this.comment) {
            this.comment = document.createComment(el.innerHTML);
            utils.replace(el, this.comment);
        }
    }
});