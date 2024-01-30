document.addEventListener("DOMContentLoaded", function () {
    var anchorPointsList = document.getElementById("anchor-points-list");
    var currentOl; // 用于跟踪当前的有序列表
    var currentLevel = 1; // 用于跟踪当前的标题层级

    // 遍历文章中的标题和子标题
    var headings = document.querySelectorAll("h1, h2, h3");
    headings.forEach(function (heading) {
        var listItem = document.createElement("li");
        var link = document.createElement("a");

        // 设置链接的文本和 href 属性
        link.textContent = heading.textContent;
        link.href = "#" + heading.id;

        // 判断标题层级
        var level;
        switch (heading.tagName.toLowerCase()) {
            case "h1":
                level = 1;
                break;
            case "h2":
                level = 1;
                break;
            case "h3":
                level = 2;
                break;
            default:
                level = 1;
        }

        // 调整当前的标题层级
        if (level > currentLevel) {
            // 新建有序列表
            currentOl = document.createElement("ol");

            // 如果有上级标题，找到其最后一个子项并添加到其中
            if (anchorPointsList.lastElementChild) {
                var parentLi = anchorPointsList.lastElementChild;
                if (parentLi.tagName.toLowerCase() === "li") {
                    parentLi.appendChild(currentOl);
                }
            }
        } else if (level < currentLevel) {
            // 上级标题，回到相应层级
            for (var i = level; i < currentLevel; i++) {
                if (currentOl && currentOl.parentElement) {
                    currentOl = currentOl.parentElement.parentElement; // 回到上一级的有序列表
                }
            }
        }

        currentLevel = level; // 更新当前的标题层级

        // 将链接添加到列表项中
        listItem.appendChild(link);

        // 将列表项添加到当前的有序列表中
        if (currentOl) {
            currentOl.appendChild(listItem);
        } else {
            // 如果没有当前的有序列表，直接添加到目录中
            anchorPointsList.appendChild(listItem);
        }
    });
});
