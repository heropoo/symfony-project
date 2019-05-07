//import _ from 'lodash';
//import './css/app.css';
//import Icon from './images/1.jpg';
//import printMe from './print';

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

//
// function component() {
//     var element = document.createElement('div');
//
//     // Lodash，现在由此脚本导入
//     //element.innerHTML = _.join(['Hello', 'webpack'], ' ');
//     //element.classList.add('hello');
//
//     // var btn = document.createElement('button');
//     // btn.innerHTML = 'Click me and check the console!';
//     // btn.onclick = printMe;
//     //
//     // btn.classList.add('btn');
//     // btn.classList.add('btn-primary');
//     // element.appendChild(btn);
//
//     // 将图像添加到我们现有的 div。
//     //var myIcon = new Image();
//     //myIcon.src = Icon;
//
//     //console.log(Icon);
//
//     //element.appendChild(myIcon);
//
//     var modal = document.createElement('div');
//     modal.innerHTML = '<button class="btn btn-primary btn-lg" data-toggle="modal" data-target="#myModal">开始演示模态框</button>\n' +
//         '<!-- 模态框（Modal） -->\n' +
//         '<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">\n' +
//         '    <div class="modal-dialog">\n' +
//         '        <div class="modal-content">\n' +
//         '            <div class="modal-header">\n' +
//         '                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>\n' +
//         '                <h4 class="modal-title" id="myModalLabel">模态框（Modal）标题</h4>\n' +
//         '            </div>\n' +
//         '            <div class="modal-body">在这里添加一些文本</div>\n' +
//         '            <div class="modal-footer">\n' +
//         '                <button type="button" class="btn btn-default" data-dismiss="modal">关闭</button>\n' +
//         '                <button type="button" class="btn btn-primary">提交更改</button>\n' +
//         '            </div>\n' +
//         '        </div><!-- /.modal-content -->\n' +
//         '    </div><!-- /.modal -->\n' +
//         '</div>';
//
//     element.append(modal);
//
//     return element;
// }
//
// document.body.appendChild(component());