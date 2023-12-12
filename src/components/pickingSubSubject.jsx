import './pickingSubSubject.css'

const PickingSubSubject = (props) => {

    // console.log(props.navbarMenu)

    const subSubjectList = props.navbarMenu.map((option) => 
    <div key={option.id} className='optionList' >
        {option.list.map((list) => 
            <div className="optionToChoose" key={list}>{list}</div>
        )}
    </div>
    )

    return (
        <>
            {subSubjectList}
        </>
    )
}

export default PickingSubSubject