import './StuHomeworkCorrect.css';

import {Avatar, Col, Comment, Input, Row} from 'antd';
import React from 'react';
import CanvasDraw from "react-canvas-draw";

const {TextArea} = Input;

const dataAns = {
    answerId: 0,
    commitTime: "0000-00-00 00:00:00",
    content: "<h1>杭州西湖游记</h1><br />这个暑假，爸爸妈妈带我去了不少地方游玩。但让我感到最美的地方，那就是美丽的人间天堂——杭州西湖。<br />湖堤两岸长满了翠绿的柳树，虽然已是夏天，柳树仍然像春天那样生机勃勃、绿意盎然。一阵微风吹来，杨柳摇曳，柳枝就像一位美丽的舞者，随着微风跳起了优雅的华尔兹，翩然起舞，随风飘扬。那柳枝又好似几根琴弦，微风像轻捷柔软的手指，弹奏出一首又一首悦耳的歌谣。放眼望去，一切都是绿的，给人一种很清爽的感觉。<br />西湖还有许多有名的景点，如断桥。雨雾朦胧，从远处看，断桥中间像被巨斧砸断了一般，那断桥还有一个缠绵悲怆的爱情故事：白娘子于断桥邂逅许仙，一见钟情，于是使尽浑身解数终于将许仙追到手。但人蛇之隔终究不能突破，在法海老和尚维护正统的义举下，两人历经磨难终归生死相隔。苏堤春晓、曲院风荷、三潭印月等这些景点也十分美丽。<br />西湖旁边还有一个景点，那就是“花港观鱼”。正值夏季，观鱼池里开满了荷花，在池塘里，一朵朵粉红色的荷花，像一位位穿着粉红衣裳的少女，头上戴着黄色的莲蓬，静静地站在那里。一阵风儿吹来，荷花和荷叶左右摇来摇去，像一位位仙女在水面上翩翩起舞。荷花的花瓣上有一层一层的纹理，看起来更加生机盎然。你瞧，那含苞欲放的荷花，真像一位腼腆的小姑娘，把自己包裹在层层花瓣中，不肯探出头来，半开的荷花，像一位纯洁的少女，用双手托住脸庞。完全盛开的荷花更是美丽动人，她开心地向人们露出灿烂的笑容。<br />“上有天堂，下有苏杭。”杭州之美，美在西湖。西湖以它特有的魅力名扬四海，每天吸引着世界各地的游人，为之流连忘返。这次西湖之游这是一段美好的记忆！<br />",
    note: "我是note"
};

const dataCheck = {
    checkId: 0,
    checkTime: "1111-11-11 11:11:11",
    score: 90,
    description: "{\"lines\":[{\"points\":[{\"x\":123.2117919921875,\"y\":114.95831298828125},{\"x\":123.2117919921875,\"y\":114.95831298828125},{\"x\":124.2117919921875,\"y\":114.95831298828125},{\"x\":126.2117919921875,\"y\":114.95831298828125},{\"x\":132.2117919921875,\"y\":114.95831298828125},{\"x\":140.2117919921875,\"y\":114.95831298828125},{\"x\":154.2117919921875,\"y\":114.95831298828125},{\"x\":170.2117919921875,\"y\":115.95831298828125},{\"x\":190.2117919921875,\"y\":115.95831298828125},{\"x\":212.2117919921875,\"y\":116.95831298828125},{\"x\":235.2117919921875,\"y\":116.95831298828125},{\"x\":266.2117919921875,\"y\":118.95831298828125},{\"x\":298.2117919921875,\"y\":118.95831298828125},{\"x\":331.2117919921875,\"y\":118.95831298828125},{\"x\":356.2117919921875,\"y\":119.95831298828125},{\"x\":386.2117919921875,\"y\":119.95831298828125},{\"x\":436.2117919921875,\"y\":120.95831298828125},{\"x\":481.2117919921875,\"y\":120.95831298828125},{\"x\":523.2117919921875,\"y\":121.95831298828125},{\"x\":563.2117919921875,\"y\":123.95831298828125},{\"x\":602.2117919921875,\"y\":125.95831298828125},{\"x\":641.2117919921875,\"y\":128.95831298828125},{\"x\":676.2117919921875,\"y\":130.95831298828125},{\"x\":710.2117919921875,\"y\":131.95831298828125},{\"x\":742.2117919921875,\"y\":131.95831298828125},{\"x\":764.2117919921875,\"y\":131.95831298828125},{\"x\":796.2117919921875,\"y\":131.95831298828125},{\"x\":822.2117919921875,\"y\":129.95831298828125},{\"x\":846.2117919921875,\"y\":128.95831298828125},{\"x\":871.2117919921875,\"y\":126.95831298828125},{\"x\":889.2117919921875,\"y\":124.95831298828125},{\"x\":912.2117919921875,\"y\":123.95831298828125},{\"x\":930.2117919921875,\"y\":122.95831298828125},{\"x\":944.2117919921875,\"y\":122.95831298828125},{\"x\":956.2117919921875,\"y\":122.95831298828125},{\"x\":965.2117919921875,\"y\":122.95831298828125},{\"x\":972.2117919921875,\"y\":122.95831298828125},{\"x\":976.2117919921875,\"y\":122.95831298828125},{\"x\":980.2117919921875,\"y\":122.95831298828125},{\"x\":981.2117919921875,\"y\":122.95831298828125},{\"x\":981.2117919921875,\"y\":122.95831298828125}],\"brushColor\":\"#ff0000\",\"brushRadius\":2},{\"points\":[{\"x\":186.2117919921875,\"y\":184.95831298828125},{\"x\":186.2117919921875,\"y\":184.95831298828125},{\"x\":194.2117919921875,\"y\":183.95831298828125},{\"x\":202.2117919921875,\"y\":183.95831298828125},{\"x\":211.2117919921875,\"y\":182.95831298828125},{\"x\":222.2117919921875,\"y\":182.95831298828125},{\"x\":233.2117919921875,\"y\":181.95831298828125},{\"x\":250.2117919921875,\"y\":180.95831298828125},{\"x\":265.2117919921875,\"y\":180.95831298828125},{\"x\":283.2117919921875,\"y\":180.95831298828125},{\"x\":301.2117919921875,\"y\":180.95831298828125},{\"x\":319.2117919921875,\"y\":180.95831298828125},{\"x\":336.2117919921875,\"y\":180.95831298828125},{\"x\":353.2117919921875,\"y\":181.95831298828125},{\"x\":374.2117919921875,\"y\":181.95831298828125},{\"x\":390.2117919921875,\"y\":183.95831298828125},{\"x\":410.2117919921875,\"y\":184.95831298828125},{\"x\":429.2117919921875,\"y\":184.95831298828125},{\"x\":448.2117919921875,\"y\":185.95831298828125},{\"x\":466.2117919921875,\"y\":186.95831298828125},{\"x\":485.2117919921875,\"y\":188.95831298828125},{\"x\":502.2117919921875,\"y\":188.95831298828125},{\"x\":519.2117919921875,\"y\":188.95831298828125},{\"x\":535.2117919921875,\"y\":188.95831298828125},{\"x\":549.2117919921875,\"y\":188.95831298828125},{\"x\":566.2117919921875,\"y\":188.95831298828125},{\"x\":580.2117919921875,\"y\":188.95831298828125},{\"x\":594.2117919921875,\"y\":188.95831298828125},{\"x\":609.2117919921875,\"y\":189.95831298828125},{\"x\":620.2117919921875,\"y\":189.95831298828125},{\"x\":636.2117919921875,\"y\":189.95831298828125},{\"x\":649.2117919921875,\"y\":189.95831298828125},{\"x\":665.2117919921875,\"y\":190.95831298828125},{\"x\":679.2117919921875,\"y\":190.95831298828125},{\"x\":692.2117919921875,\"y\":190.95831298828125},{\"x\":706.2117919921875,\"y\":190.95831298828125},{\"x\":720.2117919921875,\"y\":190.95831298828125},{\"x\":733.2117919921875,\"y\":190.95831298828125},{\"x\":746.2117919921875,\"y\":190.95831298828125},{\"x\":760.2117919921875,\"y\":190.95831298828125},{\"x\":772.2117919921875,\"y\":190.95831298828125},{\"x\":784.2117919921875,\"y\":190.95831298828125},{\"x\":795.2117919921875,\"y\":190.95831298828125},{\"x\":805.2117919921875,\"y\":190.95831298828125},{\"x\":814.2117919921875,\"y\":189.95831298828125},{\"x\":822.2117919921875,\"y\":189.95831298828125},{\"x\":829.2117919921875,\"y\":189.95831298828125},{\"x\":832.2117919921875,\"y\":188.95831298828125},{\"x\":838.2117919921875,\"y\":188.95831298828125},{\"x\":840.2117919921875,\"y\":188.95831298828125},{\"x\":841.2117919921875,\"y\":188.95831298828125},{\"x\":841.2117919921875,\"y\":188.95831298828125}],\"brushColor\":\"#ff0000\",\"brushRadius\":2},{\"points\":[{\"x\":261.2117919921875,\"y\":231.95831298828125},{\"x\":261.2117919921875,\"y\":231.95831298828125},{\"x\":263.2117919921875,\"y\":231.95831298828125},{\"x\":266.2117919921875,\"y\":231.95831298828125},{\"x\":271.2117919921875,\"y\":231.95831298828125},{\"x\":276.2117919921875,\"y\":231.95831298828125},{\"x\":286.2117919921875,\"y\":232.95831298828125},{\"x\":298.2117919921875,\"y\":233.95831298828125},{\"x\":310.2117919921875,\"y\":233.95831298828125},{\"x\":328.2117919921875,\"y\":235.95831298828125},{\"x\":348.2117919921875,\"y\":235.95831298828125},{\"x\":365.2117919921875,\"y\":236.95831298828125},{\"x\":394.2117919921875,\"y\":239.95831298828125},{\"x\":420.2117919921875,\"y\":240.95831298828125},{\"x\":448.2117919921875,\"y\":241.95831298828125},{\"x\":476.2117919921875,\"y\":243.95831298828125},{\"x\":504.2117919921875,\"y\":243.95831298828125},{\"x\":532.2117919921875,\"y\":244.95831298828125},{\"x\":555.2117919921875,\"y\":244.95831298828125},{\"x\":582.2117919921875,\"y\":245.95831298828125},{\"x\":604.2117919921875,\"y\":245.95831298828125},{\"x\":622.2117919921875,\"y\":245.95831298828125},{\"x\":639.2117919921875,\"y\":246.95831298828125},{\"x\":654.2117919921875,\"y\":246.95831298828125},{\"x\":666.2117919921875,\"y\":246.95831298828125},{\"x\":675.2117919921875,\"y\":246.95831298828125},{\"x\":683.2117919921875,\"y\":246.95831298828125},{\"x\":689.2117919921875,\"y\":246.95831298828125},{\"x\":692.2117919921875,\"y\":246.95831298828125},{\"x\":694.2117919921875,\"y\":246.95831298828125},{\"x\":694.2117919921875,\"y\":246.95831298828125}],\"brushColor\":\"#ff0000\",\"brushRadius\":2}],\"width\":1242,\"height\":269}",
    comment: "我是comment"
};

// this.props.data = {title:, description:, note:,...}
class StuHomeworkCorrect extends React.Component {
    constructor(props) {
        super(props);
        this.handinContent = React.createRef();
        this.canvas = React.createRef();
        this.state = {
            answerId: this.props.data.answerId,
            commitTime: "",
            content: "",
            note: "",

            checkId: this.props.data.checkId,
            checkTime: "",
            score: "",
            description: "",
            comment: "",

            width: 400,
            height: 400
        };
    }

    componentDidMount() {
        this.setState({commitTime: dataAns.commitTime, content: dataAns.content, note: dataAns.note});
        this.setState({
            checkTime: dataCheck.checkTime,
            score: dataCheck.score,
            description: dataCheck.description,
            comment: dataCheck.comment
        });
        setTimeout(() => {
            this.setState({
                width: this.handinContent.current.clientWidth,
                height: this.handinContent.current.clientHeight
            });
            this.canvas.loadSaveData(this.state.description);
        }, 100);
    }

    render() {
        const {title, content, endTime, score} = this.props.data;
        const {color, brushRadius, lazyRadius} = {color: "#ff0000", brushRadius: 2, lazyRadius: 0};
        return (
            <div className="stu-homework-correct">
                <div className="homework-container">
                    <h2 className="homework-title">
                        {title}
                    </h2>
                    <Row>
                        <Col span={6}>
                            <p>
                                <strong>截止时间:&nbsp;&nbsp;</strong>{endTime}
                            </p>
                        </Col>
                        <Col span={4}>
                            <p>
                                <strong>总分:</strong>{score}
                            </p>
                        </Col>
                    </Row>
                    <div className="description">
                        <p>
                            <strong>作业描述:</strong><br/>
                            {content}
                        </p>
                    </div>
                </div>

                <div className="handin-content-container">
                    <h2><strong>学生作业答案</strong></h2>
                    <div className="handin-content-cover">
                        <CanvasDraw
                            ref={(canvasDraw) => (this.canvas = canvasDraw)}
                            brushColor={color}
                            brushRadius={brushRadius}
                            lazyRadius={lazyRadius}
                            canvasWidth={this.state.width}
                            canvasHeight={this.state.height}
                            hideGrid
                            disabled
                        />
                    </div>
                    <div ref={this.handinContent} dangerouslySetInnerHTML={{__html: this.state.content}}>
                    </div>
                </div>
                <div className="comment">
                    <h2><strong>教师批改情况</strong></h2>
                    <p><strong>批改时间:&nbsp;&nbsp;</strong>{this.state.checkTime}</p>
                    <p><strong>分数:&nbsp;&nbsp;</strong>{this.state.score}</p>
                    <Comment
                        avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                                        alt="Han Solo"/>}
                        content={<TextArea disabled rows={4} value={this.state.comment}/>}
                    />
                </div>
            </div>
        );
    }
}

export default StuHomeworkCorrect;
