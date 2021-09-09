import React, { useState } from "react";
import "../css/write.css";
import { fireStore } from "../config/BBSConfig";
import moment from "moment";

// props.history
/**
 * react-router-dom을 사용하여 Routing을 구현하면
 * 메뉴에서 글쓰기를 클릭했을때 호출(렌더링)된 컴포넌트이다
 *
 * 이때 react-router-dom은 매개변수로 history라는 변수를 전달한다
 * history 변수는 routing과 관련된 변수이다
 * history.push(URL) : URL로 redirect하라
 */
function BBsWrite({ history }) {
  const [bbs, setBBs] = useState({
    b_writer: "",
    b_subject: "",
    b_content: "",
  });

  const onChange = (e) => {
    const { value, name } = e.target;
    setBBs({ ...bbs, [name]: value });
  };

  const onClickSave = () => {
    // const str = JSON.stringify(bbs);
    // alert(bbs);

    // bbs의 데이터를 복제하면서 b_date, b_time 칼럼을 추가하겠다
    const saveBBS = {
      ...bbs,
      b_date: moment().format("YYYY[-]MM[-]DD"),
      b_time: moment().format("HH:mm:ss"),
    };

    /**
     * firestore에 데이터 저장하기
     * add()를 사용하여 저장하는데 only insert
     * doc(key).set()을 병행하여 사용하면 Update or Insert
     */
    // fireStore
    //   .collection("bbs")
    //   .add({
    //     saveBBS,
    //   })
    //   .then((doc) => {
    //     console.log(doc);
    //   });
    fireStore
      .collection("bbs")
      .doc()
      .set(saveBBS)
      .then((doc) => {
        console.log(doc);
        history.push("/");
      });
  };

  return (
    <div className="write">
      {/* tag code 내에 작성하는 주석문 */}
      {/* 
			input tag의 onChange 이벤트 핸들러 
			input box에 데이터(문자열)을 입력하면
			입력된 데이터를 상태(변수, 객체)에 보관하는 역할
		*/}
      <input placeholder="작성자" name="b_writer" onChange={onChange} />

      <input placeholder="제목" name="b_subject" onChange={onChange} />

      <input placeholder="내용" name="b_content" onChange={onChange} />

      <div>
        <button className="btn_save" onClick={onClickSave}>
          저장
        </button>
      </div>
    </div>
  );
}

export default BBsWrite;
