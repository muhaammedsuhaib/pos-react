import { message, Modal } from 'antd';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectSuperVisorPassword, userActions } from '../../reducer/login/reducer';
import { checkSupervisorPassword } from '../../reducer/login/actions';
import Loader from '../loader/loader';

function ManagerPassword({ managerOpen, setManagerOpen, result, setSupervisorPasswor, ...props }) {
	const dispatch = useDispatch();
	const checkPassword = useSelector(selectSuperVisorPassword)
	const [password, setPassword] = useState('');
	const [checkingPassword, setCheckingPassword] = useState(false);
	useEffect(() => {
		setPassword('');
	}, [managerOpen])
	useEffect(() => {
		if (checkPassword && checkPassword.status && checkPassword.status == true) {
			message.success(checkPassword.message);
			dispatch(userActions.clearCheckPasswords());
			setCheckingPassword(false);
			if (result) result(true);
			setSupervisorPasswor(password);
			setManagerOpen(false);
		}
		if (checkPassword && checkPassword.status == false && checkPassword.loading == false) {
			if (checkPassword && checkPassword.data && typeof checkPassword.data === 'object') {
				for (const key in checkPassword.data) {
					message.error(checkPassword.data[key][0]);
				}
				if (Object.keys(checkPassword.data).length > 0)
					dispatch(userActions.clearCheckPasswords());
			} else if (checkPassword && checkPassword.message) {
				message.error(checkPassword.message);
				if (checkPassword && checkPassword.data == null) {
					dispatch(userActions.clearCheckPasswords());
				}
			}
			if (checkingPassword)
				setCheckingPassword(false);
		}
	}, [checkPassword]);
	const handleSubmit = () => {
		setCheckingPassword(true);
		dispatch(checkSupervisorPassword({
			password: password
		}));
	}
	return (
		<>
			<Modal
				title="Supervisor Password"
				style={{
					top: 20,
				}}
				open={managerOpen}
				onOk={() => setManagerOpen(false)}
				onCancel={() => setManagerOpen(false)}
				width={650}
				footer={false}
				maskClosable={false}
			>
				<div className="addPettyCash">
					<form
						className="validForm pettyCashAdd"
						noValidate="novalidate"
						method='POST'
						onSubmit={(e) => {
							e.preventDefault();
						}}
					>
						<div className="modal-content">
							<div className="modal-body">
								<div className="modal-body-form-grid">
									<div className="form-group flex gap-[3px] py-2 px-4">
										<input
											type="password"
											name="password"
											className="form-control"
											inputMode='text'
											placeholder="Supervisor Password"
											onChange={(e) => setPassword(e.target.value)}
											value={password}
											autoComplete='new-password'
											onKeyUp={(e) => {
												if (e.key == 'Enter') {
													handleSubmit();
												}
											}}
										/>
									</div>
								</div>
							</div>
							<div className="modal-footer footer-sm py-2">
								<button
									type="button"
									onClick={() => {
										handleSubmit();
									}}
								>
									Submit
								</button>
							</div>
						</div>
					</form>
				</div>
			</Modal>
			{checkingPassword && (
				<Loader />
			)}
		</>
	);
}

export default ManagerPassword;