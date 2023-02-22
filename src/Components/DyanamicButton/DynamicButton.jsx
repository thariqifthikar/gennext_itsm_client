import { Button } from 'antd';
function DynamicButton(props) {
    const { text, color ,textColor,borderRadius} = props;
    return (
      <Button style={{ backgroundColor: color, color: textColor,borderRadius: 20 }}>{text}</Button>
    );
  }

  export default DynamicButton;