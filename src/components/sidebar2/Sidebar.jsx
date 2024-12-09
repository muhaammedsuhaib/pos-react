import React from "react";
import live from "../../../public/live_order.png";
import pos from "../../../public/pos.png";
import kds from "../../../public/kds.png";
import reserve from "../../../public/reserveArtboard.png";
import expense from "../../../public/pettycashArtboard 2.png";
import petty from "../../../public/pettycashArtboard 1.png";
import store from "../../../public/online_store.png";
import { Link } from "react-router-dom";
export default function Sidebar() {
  return (
    <div>
      <div className="sidebar bg-[#595959]">
        <ul>
          <li>
            <a href="https://pos.brixbull.ai/admin/dashboard">
              <div>
                <img src={live} alt="" />
              </div>
              <span>live</span>
            </a>
          </li>
          <li>
            <a href="https://pos.brixbull.ai/admin/dashboard">
              {/* <a href="/"> */}
              <div>
                <img src={pos} alt="" />
              </div>
              <span>pos</span>
            </a>
          </li>
          <li>
            <Link to="/kitchen">
              <div>
                <img src={kds} alt="" />
              </div>
              <span>kds</span>
            </Link>
          </li>
          <li>
            <a href="https://pos.brixbull.ai/admin/dashboard">
              <div>
                <img src={reserve} alt="" />
              </div>
              <span>reserve</span>
            </a>
          </li>
          <li>
            <Link to="/expense">
              <div>
                <img src={expense} alt="" />
              </div>
              <span>expense</span>
            </Link>
          </li>
          <li>
            <Link to="/petty-cash">
              <div>
                <img src={petty} alt="" />
              </div>
              <span>petty</span>
            </Link>
          </li>
          <li>
            <a href="https://pos.brixbull.ai/admin/dashboard">
              <div>
                <img src={store} alt="" />
              </div>
              <span>store</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
