// 文章的锚点交互
document.addEventListener("DOMContentLoaded", function () {
    var anchorPointsList = document.getElementById("anchor-points-list");
    var currentOl;
    var currentLevel = 1;

    var headings = document.querySelectorAll(".article-content h1, .article-content h2, .article-content h3");
    headings.forEach(function (heading, index) {
        var listItem = document.createElement("li");
        var link = document.createElement("a");

        link.textContent = heading.textContent;
        link.href = "#" + heading.id;

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

        if (level > currentLevel) {
            currentOl = document.createElement("ol");

            if (anchorPointsList.lastElementChild) {
                var parentLi = anchorPointsList.lastElementChild;
                if (parentLi.tagName.toLowerCase() === "li") {
                    parentLi.appendChild(currentOl);
                }
            }
        } else if (level < currentLevel) {
            for (var i = level; i < currentLevel; i++) {
                if (currentOl && currentOl.parentElement) {
                    currentOl = currentOl.parentElement.parentElement;
                }
            }
        }

        currentLevel = level;

        listItem.appendChild(link);

        if (currentOl) {
            currentOl.appendChild(listItem);
        } else {
            anchorPointsList.appendChild(listItem);
        }

        if (index === 0) {
            link.classList.add("selected");
            heading.classList.add("linked-heading");
        }

        link.addEventListener("click", function (event) {
            event.preventDefault();

            var allLinks = anchorPointsList.querySelectorAll("a");
            allLinks.forEach(function (link) {
                link.classList.remove("selected");
            });

            var allHeadings = document.querySelectorAll(".linked-heading");
            allHeadings.forEach(function (h) {
                h.classList.remove("linked-heading");
            });

            link.classList.add("selected");

            var targetElement = document.getElementById(heading.id);

            if (targetElement) {
                targetElement.scrollIntoView({ behavior: "smooth" });
            }

            heading.classList.add("linked-heading");
        });
    });

    window.addEventListener("scroll", function () {
        var scrollPosition = window.scrollY || document.documentElement.scrollTop;

        var closestHeading;
        headings.forEach(function (heading) {
            var headingOffset = heading.offsetTop;
            if (!closestHeading || Math.abs(headingOffset - scrollPosition) < Math.abs(closestHeading.offsetTop - scrollPosition)) {
                closestHeading = heading;
            }
        });

        var closestLink = document.querySelector('a[href="#' + closestHeading.id + '"]');

        var allLinks = anchorPointsList.querySelectorAll("a");
        allLinks.forEach(function (link) {
            link.classList.remove("selected");
        });

        var allHeadings = document.querySelectorAll(".linked-heading");
        allHeadings.forEach(function (h) {
            h.classList.remove("linked-heading");
        });

        if (closestLink) {
            closestLink.classList.add("selected");
        }

        if (closestHeading) {
            closestHeading.classList.add("linked-heading");
        }
    });
});



// Doc list Selected

document.addEventListener("DOMContentLoaded", function () {
    // 获取ID为doc-catalog-box-select的元素
    var catalogBox = document.getElementById("doc-catalog-box-select");

    // 获取所有的a标签
    var allLinks = catalogBox.querySelectorAll('.doc-catalog-part-pages li a');

    // 默认选中第一个a标签
    var selectedLink = allLinks[0];
    selectedLink.classList.add('selected');

    // 添加点击事件监听
    allLinks.forEach(function(link) {
        link.addEventListener('click', function() {
            // 移除所有a标签的选中样式
            allLinks.forEach(function(item) {
                item.classList.remove('selected');
            });
            
            // 给点击的a标签添加选中样式
            link.classList.add('selected');
        });
    });
});
