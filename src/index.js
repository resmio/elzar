import component from './javascripts/components/test-component';
var app = document.createElement('div');
app.id = 'root';

document.body.appendChild(app);
app.appendChild(component());
