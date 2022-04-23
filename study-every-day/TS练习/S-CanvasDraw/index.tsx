import Global from '@/global';
// import { HttpResult } from '@/models/global';
// import { FormTypePartial } from '@/pages/dm/device/_interface';
// import { setArrayPoints } from '@/pages/dm/device/_service';
import { HttpResult } from '@ccs-design/rc-pro';
import { useRequest, useUpdateEffect } from 'ahooks';
import { Button, Select, Space } from 'antd';
import React, { createRef, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import './index.less';
const colorArr: string[] = [
  'red',
  '#6600CC',
  'orange',
  'blue',
  'green',
  '#CC00CC',
  '#CC0066',
  '#86724c',
  '#7676be',
  'purple',
];
interface DrawPropData {
  sn: string;
  values: any;
  onFinish: any;
}
interface ICompletePointArrs {
  shape: any;
  direction: string;
  color?: string;
}
interface IPoint {
  x: number;
  y: number;
}
const DrawLine = ({ sn, values, onFinish }: DrawPropData) => {
  let ptColor = colorArr[0];
  let [disabledBtn, setDisabledBtn] = useState(false);
  let [pointArr, setPointArr] = useState<IPoint[]>([]); //存放坐标的数组
  let [completePointArr, setCompletePointArr] = useState<IPoint[]>([]); //存放完成选择区域后的坐标的数组
  let [completePointArrs, setCompletePointArrs] = useState<ICompletePointArrs[]>([]); //存放完成选择区域后的多个区域的左边数组
  const [image, setImage] = useState<HTMLElement>();
  const [can, setCan] = useState<any>(null);
  const [context, setContext] = useState<any>(null);
  const history = useHistory();
  let canvas = createRef();
  let pointX: number, pointY: number;
  let oIndex = -1; //判断鼠标是否移动到起始点处，-1为否，1为是

  // const setArrayPointsRequest = useRequest<HttpResult>(setArrayPoints, { manual: true });

  useEffect(() => {
    initCanvas();
  }, []);

  useUpdateEffect(() => {
    // setCompletePointArr([]);
    // setCompletePointArrs([]);
    // setPointArr([]);
    clear();
    if (values) {
      autoDraw(values);
    }
  }, [values]);

  //请求数据回显示
  const autoDraw = (values: any) => {
    let image = new Image();
    setImage(image);
    // image.src = values.algorithmImg ? Global.UploadImageUrl + values.algorithmImg : "";
    // image.src = values.algorithmImg ? values.algorithmImg + '?temp=' + Math.random() : '';
    image.onload = function () {
      setImage(image);
      context.clearRect(0, 0, can.width, can.height);
      //context.drawImage(image, 0, 0, can.width, can.height);
      // context.lineWidth = 3;
      setCompletePointArrs([]);
      drawRect(values.arrayPoints ? JSON.parse(values.arrayPoints) : [], image, true);
    };
  };

  const onselect = (e: string, index: number) => {
    completePointArrs[index].direction = e;
    let _temp = [...completePointArrs];
    setCompletePointArrs(_temp);
  };

  const draw = (event: any) => {
    const e = event.nativeEvent;
    if (completePointArrs.length == 10) {
      return;
    }
    if (e.offsetX || e.layerX) {
      (can as any).addEventListener('mousemove', mousemoveHandler);
      pointX = e.offsetX == undefined ? e.layerX : e.offsetX;
      pointY = e.offsetY == undefined ? e.layerY : e.offsetY;
      let piX, piY;
      ptColor = colorArr[completePointArrs.length];

      if (oIndex > 0 && pointArr.length > 0) {
        piX = pointArr[0].x;
        piY = pointArr[0].y;
        //画点
        makearc(context, piX, piY, GetRandomNum(2, 2), 0, 180, ptColor);
        pointArr.push({ x: piX, y: piY });
        setPointArr(pointArr);
        saveCanvas(ptColor); //生成画布
      } else {
        piX = pointX;
        piY = pointY;
        makearc(context, piX, piY, GetRandomNum(2, 2), 0, 180, ptColor);
        pointArr.push({ x: piX, y: piY });
        setPointArr(pointArr);
      }
    }
  };
  /**
   * 鼠标移动事件监听
   * @param e
   */
  let mousemoveHandler = function (e: any) {
    if (e.offsetX || e.layerX) {
      pointX = e.offsetX == undefined ? e.layerX : e.offsetX;
      pointY = e.offsetY == undefined ? e.layerY : e.offsetY;
      let piX, piY;
      /*清空画布*/
      context.clearRect(0, 0, can.width, can.height);
      context.drawImage(image, 0, 0, can.width, can.height);
      if (completePointArrs.length > 0) {
        drawRect(completePointArrs, image);
      }

      /*鼠标下跟随的圆点*/
      makearc(context, pointX, pointY, GetRandomNum(4, 4), 0, 180, ptColor);

      if (pointArr.length > 0) {
        if (
          pointX > pointArr[0].x - 15 &&
          pointX < pointArr[0].x + 15 &&
          pointY > pointArr[0].y - 15 &&
          pointY < pointArr[0].y + 15
        ) {
          if (pointArr.length > 1) {
            piX = pointArr[0].x;
            piY = pointArr[0].y;
            context.clearRect(0, 0, can.width, can.height);
            context.drawImage(image, 0, 0, can.width, can.height);
            if (completePointArrs.length > 0) {
              drawRect(completePointArrs, image);
            }
            makearc(context, piX, piY, GetRandomNum(4, 4), 0, 180, ptColor);
            oIndex = 1;
          }
        } else {
          piX = pointX;
          piY = pointY;
          oIndex = -1;
        }
        /*开始绘制*/
        context.beginPath();
        context.moveTo(pointArr[0].x, pointArr[0].y);
        if (pointArr.length > 1) {
          for (let i = 1; i < pointArr.length; i++) {
            context.lineTo(pointArr[i].x, pointArr[i].y);
          }
        }
        context.strokeStyle = ptColor;
        context.lineTo(piX, piY);
        // context.fillStyle = 'rgba(161,195,255,1)';//填充颜色
        // context.fill();//填充
        context.stroke(); //绘制
      }
    }
  };

  /*生成画布 结束绘画*/
  let saveCanvas = (color: string) => {
    completePointArr = pointArr;
    let _c: ICompletePointArrs = {
      shape: completePointArr,
      direction: 'right',
      color,
    };
    completePointArrs.push(_c);
    setCompletePointArr(completePointArr);
    setCompletePointArrs(completePointArrs);
    setPointArr([]);
    can.removeEventListener('mousemove', mousemoveHandler);
    if (completePointArrs.length > 0) {
      drawRect(completePointArrs, image);
      //   getSelectDom();
    }
  };

  /*验证canvas画布是否为空函数*/
  let isCanvasBlank = (canvas: any) => {
    let blank = document.createElement('canvas'); //创建一个空canvas对象
    blank.width = canvas.width;
    blank.height = canvas.height;
    return canvas.toDataURL() == blank.toDataURL(); //为空 返回true
  };

  /*canvas生成圆点*/
  let GetRandomNum = (Min: number, Max: number) => {
    let Range = Max - Min;
    let Rand = Math.random();
    return Min + Math.round(Rand * Range);
  };

  let makearc = (
    context: any,
    x: number,
    y: number,
    r: number,
    s: number,
    e: any,
    color: string,
  ) => {
    // ctx.clearRect(0, 0, 199, 202);//清空画布
    context.beginPath();
    context.fillStyle = color;
    context.arc(x, y, r, s, e);
    context.fill();
  };

  let drawRect = (arrayPoints: any, image: any, autoDraw?: boolean | undefined) => {
    context.clearRect(0, 0, can.width, can.height);
    context.drawImage(image, 0, 0, can.width, can.height);
    for (let i = 0; i < arrayPoints.length; i++) {
      context.strokeStyle = colorArr[i];
      context.beginPath();
      let point = arrayPoints[i]['shape'];
      for (let j = 0; j < point.length; j++) {
        context.lineTo(point[j].x, point[j].y);
      }
      context.closePath();
      context.stroke();

      if (autoDraw) {
        arrayPoints[i]['color'] = colorArr[i];
        completePointArrs.push(arrayPoints[i]);
        let _tem = [...completePointArrs];
        setCompletePointArrs(_tem);
      }
    }
  };
  /**
   * 初始化获取图片
   * @param sn 图片地址
   */
  const initCanvas = () => {
    let can: any = canvas.current;
    let context: CanvasRenderingContext2D = can.getContext('2d');
    can.height = 1080;
    let image = new Image();
    setCan(can);
    setContext(context as any);
    setImage(image as any);
    // image.src = ';
    image.onload = function () {
      context.drawImage(image, 0, 0, can.width, can.height);
      context.lineWidth = 3;
    };
  };
  /**
   * 撤销选区
   */
  const resetCanvas = () => {
    context.clearRect(0, 0, can.width, can.height);
    context.drawImage(image, 0, 0, can.width, can.height);

    //移除最后一个多边形的点位
    completePointArrs.pop();

    setCompletePointArrs([...completePointArrs]);
    //重新绘制已绘制的多边形
    if (completePointArrs.length > 0) {
      drawRect(completePointArrs, image);
    } else {
      clear();
    }
  };

  // const onSubmit = () => {
  //     if (completePointArrs) {
  //         setArrayPointsRequest.run(values.sn, JSON.stringify(completePointArrs)).then((res) => {
  //             console.log("setArrayPointsRequest:", res);
  //         });
  //         if (onFinish) {
  //             onFinish();
  //         }
  //     }

  // }
  const onSubmit = () => {};
  /**
   * 清空选区
   */
  const clear = () => {
    context.clearRect(0, 0, can.width, can.height);
    context.drawImage(image, 0, 0, can.width, can.height);
    setCompletePointArr([]);
    setCompletePointArrs([]);
    setPointArr([]);
  };

  return (
    <>
      <div className="operateResPDiv">
        <div className="operateRes">
          <div style={{ fontWeight: 'bold', color: '#333', marginBottom: 20, fontSize: 18 }}>
            请设置方向
          </div>
          <div style={{ color: '', marginTop: 10, fontSize: 15 }}>
            <span className="color-ring" style={{ backgroundColor: '' }}></span>
            {completePointArrs &&
              completePointArrs.map((item: any, index) => {
                return (
                  <div key={index}>
                    <span style={{ color: item.color }}> 第 {index + 1} 次选中区域:</span>
                    <Select onChange={(e) => onselect(e, index)} value={item.direction}>
                      <Select.Option value="up">上</Select.Option>
                      <Select.Option value="down">下</Select.Option>
                      <Select.Option value="left">左</Select.Option>
                      <Select.Option value="right">右</Select.Option>
                    </Select>
                  </div>
                );
              })}
          </div>
        </div>
        <div style={{ marginBottom: 30 }}>
          <Space style={{ textAlign: 'center' }}>
            <Button onClick={clear}> 清空选区 </Button>
            <Button onClick={resetCanvas}> 撤销 </Button>
            <Button type="primary" disabled={disabledBtn} onClick={onSubmit}>
              提交
            </Button>
          </Space>
        </div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <canvas ref={canvas} onClick={(e) => draw(e)} width="1920px"></canvas>
      </div>
    </>
  );
};

export default DrawLine;
