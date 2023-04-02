const selected = [
  {
    id: 1,
    menu: "에스프레소",
    cnt: 0,
    price: 3600,
  },
  {
    id: 2,
    menu: "아메리카노",
    cnt: 0,
    price: 4100,
  },
  {
    id: 3,
    menu: "카페 라떼",
    cnt: 0,
    price: 4600,
  },
  {
    id: 4,
    menu: "카라멜 마끼아또",
    cnt: 0,
    price: 5600,
  },
  {
    id: 5,
    menu: "돌체 라떼",
    cnt: 0,
    price: 5600,
  },
  {
    id: 6,
    menu: "돌체 콜드 브루",
    cnt: 0,
    price: 5800,
  },
  {
    id: 7,
    menu: "딸기 요거트",
    cnt: 0,
    price: 6100,
  },
  {
    id: 8,
    menu: "자몽 허니 블랙티",
    cnt: 0,
    price: 5300,
  },
  {
    id: 9,
    menu: "자바 칩 프라푸치노",
    cnt: 0,
    price: 6100,
  },
];

const btn_1 = document.getElementById(1);
const btn_2 = document.getElementById(2);
const btn_3 = document.getElementById(3);
const btn_4 = document.getElementById(4);
const btn_5 = document.getElementById(5);
const btn_6 = document.getElementById(6);
const btn_7 = document.getElementById(7);
const btn_8 = document.getElementById(8);
const btn_9 = document.getElementById(9);



const orderCancleBtn = document.querySelector(`.cancle`);
const orderedFooter = document.querySelector(`.order_footer`);

const addBtn = document.querySelector(`.add`);
const clickMenu = (id) => {
  selected[id - 1].cnt++;
  document.querySelector(`.amount_${id}`).innerHTML = selected[id - 1].cnt;
};
let orderHistory = [0, 0, 0, 0, 0, 0, 0, 0, 0];
let total = 0;
const addOrder = () => {
  for (let i = 1; i < selected.length + 1; i++) {
    if (selected[i - 1].cnt !== 0 && orderHistory[i - 1] === 0) {
      const inOrder = document.createElement("div");
      inOrder.classList.add(`in_order_${i}`);
      inOrder.classList.add(`in_order`);

      const menu = document.createElement("div");
      menu.classList.add(`menu_${i}`);

      menu.innerHTML = selected[i - 1].menu;
      menu.style.width = "150px";
      menu.style.overflow = "hidden";
      inOrder.appendChild(menu);
      inOrder.classList.add(`in_order_${i}`);

      const cnt = document.createElement("div");
      cnt.classList.add(`cnt_${i}`);
      cnt.innerHTML = selected[i - 1].cnt;
      orderHistory[i - 1] = selected[i - 1].cnt;
      inOrder.appendChild(cnt);

      const price = document.createElement("div");
      price.classList.add(`price_${i}`);
      price.innerHTML = selected[i - 1].price * selected[i - 1].cnt + " ₩";
      inOrder.appendChild(price);

      const deleteBtn = document.createElement("button");
      deleteBtn.classList.add(`cancle_${i}`);
      deleteBtn.classList.add(`delete_menu`);

      deleteBtn.innerHTML = "Delete";
      inOrder.appendChild(deleteBtn);
      orderedFooter.appendChild(inOrder);
    } else if (selected[i - 1].cnt !== 0 && orderHistory[i - 1] > 0) {
      document.querySelector(`.cnt_${i}`).innerHTML =
        selected[i - 1].cnt + orderHistory[i - 1];
      document.querySelector(`.price_${i}`).innerHTML =
        (selected[i - 1].cnt + orderHistory[i - 1]) * selected[i - 1].price +
        "₩";
      orderHistory[i - 1] += selected[i - 1].cnt;
    }
    total += selected[i - 1].cnt * selected[i - 1].price;
  }
  document.querySelector(`.sum`).value = total;
  if (total > 0) {
    alert(`선택하신 음료 주문이 추가되었습니다.`);
  } else {
    alert(`음료를 선택해 주세요.`);
  }
  for (let i = 1; i < selected.length + 1; i++) {
    selected[i - 1].cnt = 0;
    document.querySelector(`.amount_${i}`).innerHTML = 0;
  }
};

const orderCancle = () => {
  for (let i = 1; i < selected.length + 1; i++) {
    selected[i - 1].cnt = 0;
    orderHistory[i - 1] = 0;
    document.querySelector(`.amount_${i}`).innerHTML = 0;
  }
};

// const deleteMenu = (e) =>{
//     document.querySelector(`.in_order_${e}`).remove()
//     console.log('aa')


//     const deleteMenu_1 = document.querySelector('.cancle_1');
//     const deleteMenu_2 = document.querySelector('.cancle_2');
//     const deleteMenu_3 = document.querySelector('.cancle_3');
//     const deleteMenu_4 = document.querySelector('.cancle_4');
//     const deleteMenu_5 = document.querySelector('.cancle_5');
//     const deleteMenu_6 = document.querySelector('.cancle_6');
//     const deleteMenu_7 = document.querySelector('.cancle_7');
//     const deleteMenu_8 = document.querySelector('.cancle_8');
//     const deleteMenu_9 = document.querySelector('.cancle_9');
    
//     deleteMenu_1&&deleteMenu_1.addEventListener("click", function () {
//         deleteMenu(1);
//       });
//       deleteMenu_2&&deleteMenu_2.addEventListener("click", function () {
//         deleteMenu(2);
//       });
//       deleteMenu_3&&deleteMenu_3.addEventListener("click", function () {
//         deleteMenu(3);
//       });
//       deleteMenu_4&&deleteMenu_4.addEventListener("click", function () {
//         deleteMenu(4);
//       });
//       deleteMenu_5&&deleteMenu_5.addEventListener("click", function () {
//         deleteMenu(5);
//       });
//       deleteMenu_6&&deleteMenu_6.addEventListener("click", function () {
//         deleteMenu(6);
//       });
//       deleteMenu_7&&deleteMenu_7.addEventListener("click", function () {
//         deleteMenu(7);
//       });
//       deleteMenu_8&&deleteMenu_8.addEventListener("click", function () {
//         deleteMenu(8);
//       });
//       deleteMenu_9&&deleteMenu_9.addEventListener("click", function () {
//         deleteMenu(9);
//       });
// }

btn_1.addEventListener("click", function () {
  clickMenu(1);
});
btn_2.addEventListener("click", function () {
  clickMenu(2);
});
btn_3.addEventListener("click", function () {
  clickMenu(3);
});
btn_4.addEventListener("click", function () {
  clickMenu(4);
});
btn_5.addEventListener("click", function () {
  clickMenu(5);
});
btn_6.addEventListener("click", function () {
  clickMenu(6);
});
btn_7.addEventListener("click", function () {
  clickMenu(7);
});
btn_8.addEventListener("click", function () {
  clickMenu(8);
});
btn_9.addEventListener("click", function () {
  clickMenu(9);
});

addBtn.addEventListener("click", function () {
  addOrder();
});




orderCancleBtn.addEventListener("click", function () {
  orderCancle();
});
