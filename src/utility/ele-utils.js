function empty(ele) {
    Array.prototype.slice.call(ele.childNodes, 0).forEach(function (child) {
        ele.removeChild(child);
    });
}

function replace(oldEle, newEle) {
    var parentNode = oldEle.parentNode;
    parentNode.insertBefore(newEle, oldEle);
    parentNode.removeChild(oldEle);
}

function remove(ele) {
    var parentNode = ele.parentNode;
    parentNode.removeChild(ele);
}

export { empty, replace, remove };
