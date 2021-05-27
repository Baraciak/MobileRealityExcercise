import React, { PureComponent } from 'react';
import { withRouter } from 'react-router';
import ImagesBlock from './ImagesBlock.js/ImagesBlock';
import TextBlock from './TextBlock/TextBlock';

class WelcomePage extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        const { history } = this.props;
        return (
            <div className="welcome-page__container">
                <div className="content-row">
                    <TextBlock
                        header={'What is Lorem Ipsum?'}
                        headerCaption={'Lorem Ipsum is simply dummy text'}
                        content={`Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                        unknown printer took a galley of type and scrambled it to make a type specimen book. It
                        has survived not only five centuries, but also the leap into electronic typesetting,
                        remaining essentially unchanged. It was popularised in the 1960s with the release of
                        Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
                        publishing software like Aldus PageMaker including versions of Lorem Ipsum.`}
                        buttonText={'Zobacz więcej'}
                        buttonAction={() => history.push('/management')}
                    />
                    <ImagesBlock
                        images={[
                            'https://i.picsum.photos/id/518/1000/1000.jpg?hmac=ykpmcWywgpK7dlOh9ZZq-CbIBnRQxcQ0GCra46UAmfo',
                            'https://i.picsum.photos/id/322/1000/1000.jpg?hmac=FX-s6LlQI9gQdrg76y9GCJI42_kS31kN9Twt-EQSCN4',
                            'https://i.picsum.photos/id/434/1000/1000.jpg?hmac=2SUJfutzSE2xIQcYvHYBNGkNoZn4Cho3SCZxxi3ND2o',
                            'https://i.picsum.photos/id/297/1000/1000.jpg?hmac=qK-NtctibeXh4CNY4LkUtXB_1dK29u98emQR5SyA4Mk',
                        ]}
                    />
                </div>
                <div className="content-row">
                    <div className="content-block">
                        <ImagesBlock
                            images={[
                                'https://i.picsum.photos/id/518/1000/1000.jpg?hmac=ykpmcWywgpK7dlOh9ZZq-CbIBnRQxcQ0GCra46UAmfo',
                                'https://i.picsum.photos/id/322/1000/1000.jpg?hmac=FX-s6LlQI9gQdrg76y9GCJI42_kS31kN9Twt-EQSCN4',
                                'https://i.picsum.photos/id/434/1000/1000.jpg?hmac=2SUJfutzSE2xIQcYvHYBNGkNoZn4Cho3SCZxxi3ND2o',
                                'https://i.picsum.photos/id/297/1000/1000.jpg?hmac=qK-NtctibeXh4CNY4LkUtXB_1dK29u98emQR5SyA4Mk',
                            ]}
                        />
                    </div>
                    <TextBlock
                        header={'What is Lorem Ipsum?'}
                        headerCaption={'Lorem Ipsum is simply dummy text'}
                        content={`Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                        unknown printer took a galley of type and scrambled it to make a type specimen book. It
                        has survived not only five centuries, but also the leap into electronic typesetting,
                        remaining essentially unchanged. It was popularised in the 1960s with the release of
                        Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
                        publishing software like Aldus PageMaker including versions of Lorem Ipsum.`}
                        buttonText={'Zobacz więcej'}
                        buttonAction={() => history.push('/management')}
                    />
                </div>
            </div>
        );
    }
}

export default withRouter(WelcomePage);
