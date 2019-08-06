function empty(ele) {
    Array.prototype.slice.call(ele.childNodes, 0).forEach(function (child) {
        ele.removeChild(child);
    });
}

function replace(refEle, newEle) {
    var parentNode = refEle.parentNode;
    if (parentNode != null) {
        parentNode.insertBefore(newEle, refEle);
        parentNode.removeChild(refEle);
    }
}

function remove(ele) {
    var parentNode = ele.parentNode;
    if (parentNode != null) {
        parentNode.removeChild(ele);
    }
}

function removeBetween(ele1, ele2) {
    var parentNode = ele1.parentNode;
    var childNodes = toArray(parentNode.childNodes);

    childNodes.forEach(function (child) {
        if (child.previousSibling === ele1 && child !== ele2) {
            parentNode.removeChild(child);
        }
        if (child.nextSibling === ele2 && child !== ele1) {
            parentNode.removeChild(child);
        }
    });
}

function insertAfter(newNode, refNode) {
    var parentNode = refNode.parentNode;

    if (parentNode.lastChild === refNode) {
        parentNode.appendChild(newNode);
    } else {
        parentNode.insertBefore(newNode, refNode.nextSibling);
    }
}

function toArray(childNodes) {
    return Array.prototype.slice.call(childNodes, 0);
}

export { empty, replace, remove, insertAfter, removeBetween };
