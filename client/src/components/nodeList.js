import { Table, Divider, Tag } from 'antd';

const columns = [{
  title: 'Device ID',
  dataIndex: 'deviceId',
  key: 'deviceId',
  render: text => <a href="javascript:;">{text}</a>,
}, {
  title: 'Device Type',
  dataIndex: 'deviceType',
  key: 'deviceType',
}, {
  title: 'Status',
  dataIndex: 'status',
  key: 'status',
}];


const data = [];
function pushData(id, deviceType, status) {
    id.forEach((id) => data.push({id: id[id], deviceType: deviceType[id], status:"ready"}))
}


ReactDOM.render(<Table columns={columns} dataSource={data} />, mountNode);