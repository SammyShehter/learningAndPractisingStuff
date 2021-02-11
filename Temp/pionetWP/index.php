<?php
    get_header();
?>

<div class='sec1'>
    <div class='sec1__wrapper'>
        <div class='menu flex'>
            <div class='menu__inner flex'>
                <h2>לוגו חברה</h2>
                <h4>מי אנחנו</h3>
                <h4>קורסים</h4>
                <h4>צרו קשר</h4>
            </div>
        </div>
        <div class='descAndCont flex'>
            <div class='descAndCont__desc'>
                <div class='imgAnim flex-center'>
                    <img src="<?php echo get_template_directory_uri() . '/assets/img/Big.svg'; ?>" class='imgAnim__big'>
                    <img src="<?php echo get_template_directory_uri() . '/assets/img/Middle.svg'; ?>" class='imgAnim__mid'>
                    <img src="<?php echo get_template_directory_uri() . '/assets/img/Small.svg'; ?>" class='imgAnim__lit'>
                    <h3 class='imgAnim__text flex-center'>&lt;&#47;	צרו קשר</h3>
                </div>
            </div>
            <div class='descAndCont__cont' dir='rtl'>
                <h2>{ קורסים טכנולוגים לחברות עם חזון }_</h2>
                <h4>
                    היום יותר מתמיד, קורסים מקצועיים זה שם המשחק וקורסים בתחום הטכנולוגיה <br> יצעידו אתכם קדימה. בעולם דינאמי, נדרש לצייד את העובדים במיומנויות מקצועיות<br> שיאפשרו להם להתמודד עם השינויים ולהוביל את הארגון לצמיחה עסקית.<br><br>הוקם בדיוק לשם כך! מדובר במיזם שמאפשר לחברות וארגונים עסקיים M-Skilers<br> לשדרג בצורה מרוכזת ומובנה את המיומנויות המקצועיות של העובדים הטכנולוגיים<br> שלהם, תוך הבטחה לתמורה מלאה.
                </h4>
                <button>קראו עוד&nbsp;&#47;&gt;</button>
            </div>
        </div>
    </div>
</div>

<div class='sec2'>
    <div class='sec2__heading flex-center'>
        <h2>_{ הקורסים }</h2>
    </div>
    
    <div class='sec2__postsWrapper flex-center'>
        <div class='left LR_Button flex-center'>
            <img src="<?php echo get_template_directory_uri() . '/assets/img/left-arrow.svg'; ?>">
        </div>
        <div class='carousel flex-center'>
            <?php
                $args = array(
                    'posts_per_page' => 4,
                    'order' => 'ASC',
                );

                $q = new WP_Query($args);

                if($q->have_posts()) {
                    while($q->have_posts()){ $q->the_post();?>
                            <div class='post flex'>
                                <div class='post__image flex-center'> 
                                    <?php the_post_thumbnail(); ?>
                                </div>
                                <h3 class='post__title'><?php the_title(); ?></h3>
                                <div class='post__content flex-center'>
                                    <p><?php the_content()?></p>
                                </div>
                                <a href=<?php the_permalink(); ?>><h3>	&lt;&#47;	 פרטים נוספים</h3></a>
                            </div>
                        <?php
                    }
                }
                wp_reset_postdata();
            ?>
        </div>
        <div class='right LR_Button flex-center'>
            <img src="<?php echo get_template_directory_uri() . '/assets/img/right-arrow.svg'; ?>">
        </div>
        
    </div>
</div>



<div class='sec3'>
    <div class="sec3__wrapper">
        <div dir='rtl' class="leftSide">
            <h2>{ למה אנחנו? }_</h2>
            <div class="leftSide__goodStuff">
                <h4>&#128944;	 
                    למידה פרקטית ויעילה של התחומים והכלים הטכנולוגיים העדכניים ביותר</h4>
                <h4>&#128944;	 תרגול אינטנסיבי שמבטיח הבנה מלאה של החומר הנלמד</h4>
                <h4>&#128944;	 מעטפת לימודית ומעשית המקנה את שלל המיומנויות</h4>
                <h4>&#128944;	 שדרוג היכולות והתאמתן לעולם הדיגיטל העכשווי תוך השאת ערך ממשי לארגון</h4>
            </div>
        </div>
        <div class="rightSide">

        </div>
    </div>

</div>


<div class="sec4">
    <h2 class="sec4__heading">_{ מבין לקוחותינו }</h2>
    <div class="sec4__clients flex">
        <div class='flex-center'><img src="<?php echo get_template_directory_uri() . '/assets/img/Image 12@2x.png'; ?>" class='clientPic'></div>
        <div class='flex-center'><img src="<?php echo get_template_directory_uri() . '/assets/img/Image 11@2x.png'; ?>" class='clientPic'></div>
        <div class='flex-center'><img src="<?php echo get_template_directory_uri() . '/assets/img/Image 10@2x.png'; ?>" class='clientPic'></div>
        <div class='flex-center'><img src="<?php echo get_template_directory_uri() . '/assets/img/Image 9@2x.png'; ?>" class='clientPic'></div>
        <div class='flex-center'><img src="<?php echo get_template_directory_uri() . '/assets/img/800px-Nice_Logo_2.svg@2x.png'; ?>" class='clientPic'></div>
        <div class='flex-center'><img src="<?php echo get_template_directory_uri() . '/assets/img/CP_ltd_vertical_Pos@2x.png'; ?>" class='clientPic'></div>
        <div class='flex-center'><img src="<?php echo get_template_directory_uri() . '/assets/img/Image 6@2x.png'; ?>" class='clientPic'></div>
        <div class='flex-center'><img src="<?php echo get_template_directory_uri() . '/assets/img/Image 5@2x.png'; ?>" class='clientPic'></div>
    </div>
</div>

<?php 
    get_footer();
?>