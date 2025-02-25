import {LoadingSpinner} from "./LoadingSpinner.tsx";
import {KTIcon} from "./KTIcon.tsx";

type ButtonPairProps = {
    showNegative?: boolean
    positiveText: string
    negativeText?: string
    positiveAction: () => void
    negativeAction?: () => void
    positiveIcon?: string
    negativeIcon?: string
    positiveDisabled?: boolean
    negativeDisabled?: boolean
    positiveLoading?: boolean
    negativeLoading?: boolean
    positiveClassName?: string
    negativeClassName?: string
    className?: string
    positiveButtonType?: 'button' | 'submit' | 'reset'
}

export const ButtonPair = ({
                               positiveText = 'Save',
                               negativeText = 'Cancel',
                               positiveAction,
                               negativeAction,
                               positiveIcon = 'check',
                               negativeIcon,
                               positiveDisabled,
                               negativeDisabled,
                               positiveLoading = false,
                               negativeLoading = false,
                               positiveClassName = 'btn-primary',
                               negativeClassName = 'btn-light',
                               className = 'd-flex flex-row gap-3 align-items-center',
                               showNegative = true,
                               positiveButtonType = 'button'
                           }: ButtonPairProps) => {

    return (
        <div className={className}>
            <button
                type={positiveButtonType}
                onClick={positiveAction}
                disabled={positiveDisabled || positiveLoading}
                className={`btn btn-sm ${positiveClassName} ${positiveLoading && 'btn-icon'} `}
            >
                {positiveLoading && <LoadingSpinner loadingText={''}/>}
                {
                    positiveIcon && !positiveLoading &&
                    <KTIcon iconName={positiveIcon} className='fs-4 me-1 d-inline-block'/>
                }
                {!positiveLoading && positiveText}
            </button>
            {showNegative && <button
                type='button'
                onClick={negativeAction}
                disabled={negativeDisabled}
                className={`btn btn-sm btn-secondary ${negativeClassName}`}
            >
                {negativeLoading && <LoadingSpinner loadingText={''}/>}
                {
                    negativeIcon && !negativeLoading && <KTIcon iconName={negativeIcon} className='fs-4 me-1'/>
                }
                {!negativeLoading && negativeText}
            </button>}

        </div>
    )
};

