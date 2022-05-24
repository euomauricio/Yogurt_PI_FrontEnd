import Post from '../Post/post';
import FeedPost from '../Post/feedPost';

import {Container} from './centralFeedStyles'

function CentralFeed() {
    return (
        <Container>
            <div className="post">
               <Post />
                <FeedPost />
            </div>
        </Container>
            

        



    )

}

export default CentralFeed;