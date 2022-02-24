study key
1. Child component
1.1. Everything can be a child
1.2. Function as a child
2.1. Looping over children
2.2. Counting children
2.2. Enforcing a single child
Bây giờ nếu chúng ta muốn component chỉ có duy nhất một children là function ta có thể làm như sau:
Dad.propTypes = {
  children: PropTypes.func.isRequired
}

- reference: https://viblo.asia/p/tim-hieu-ve-children-trong-react-oOVlYqWol8W
