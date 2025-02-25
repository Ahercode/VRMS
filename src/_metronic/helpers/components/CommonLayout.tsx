import React, {ReactNode} from 'react';
import { LayoutGroup, motion } from "framer-motion";
import { Table } from "antd";
import { ToolbarWrapper } from "../../layout/components/toolbar";
import ButtonsToRight, { ButtonConfig } from "./ButtonsToRight.tsx";
import { Content } from "../../layout/components/content";
import { ButtonPair } from "./ButtonPair.tsx";
import {ColumnsType} from "antd/es/table";

interface CommonLayoutProps<T> {
    buttons: ButtonConfig[];
    columns: ColumnsType<T>;
    sidebarViewType: 'add' | 'edit' | 'none';
    showSidebar: (sideBarType: 'add' | 'edit' | 'none') => void;
    elemenName: string;
    handleSaveClick: () => void;
    formComponent: ReactNode;
    tableData: T[];
}

export const CommonLayout = <T,>({ buttons, columns, sidebarViewType,
                                     showSidebar, elemenName, formComponent, handleSaveClick, tableData }: CommonLayoutProps<T>) => {
    return (
        <>
            <ToolbarWrapper />
            <Content>
                <ButtonsToRight buttons={buttons} />
                <LayoutGroup>
                    <div className={'d-flex flex-row mb-10'}>
                        <motion.div
                            layout={"size"}
                            initial={{opacity: 0.1, y: -10, scale: 0.95}}
                            animate={{opacity: 1, y: 0, scale: 1}}
                            transition={{
                                duration: 0.3, type: 'spring', stiffness: 150,
                                damping: 20,
                                ease: 'easeInOut'
                            }}
                            className='card card-custom shadow w-100'>
                            <div className='card-body'>
                                <div className='table-responsive'>
                                    <Table dataSource={tableData} columns={columns} bordered />
                                </div>
                            </div>
                        </motion.div>
                        {sidebarViewType !== 'none' && (
                            <motion.div
                                layout={"preserve-aspect"}
                                initial={{opacity: 0.45, x: 120, scale: 0.75}}
                                animate={{opacity: 1, x: 0, scale: 1}}
                                transition={{
                                    duration: 0.3,
                                    type: 'spring',
                                    stiffness: 150,
                                    damping: 20,
                                    ease: 'easeInOut'
                                }}
                                className={`col-4 ms-4 d-flex justify-content-center`}>
                                <div className='card card-custom shadow w-100'>
                                    <div className='card-header'>
                                        <div className='card-title'>
                                            {sidebarViewType === 'add' ? `Add ${elemenName}` : `Edit ${elemenName}`}
                                        </div>
                                    </div>
                                    <div className='card-body'>
                                        {formComponent}
                                    </div>
                                    <div className='card-footer py-6'>
                                        <ButtonPair
                                            positiveText={'Save'}
                                            positiveAction={() => handleSaveClick()}
                                            negativeText={'Cancel'}
                                            negativeAction={() => showSidebar('none')}
                                            negativeIcon={'close'}
                                            positiveIcon={'check'}
                                            positiveClassName={'btn-primary hover-scale'}
                                            className={'d-flex flex-row-reverse gap-4'}
                                            positiveButtonType={'submit'}
                                        />
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </div>
                </LayoutGroup>
            </Content>
        </>
    );
};