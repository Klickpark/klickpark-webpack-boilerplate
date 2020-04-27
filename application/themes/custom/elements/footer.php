<?php
defined('C5_EXECUTE') or die('Access denied.');
$cp = Page::getCurrentPage();
?>

            <section class="footer">
                Footer.
            </section><!-- /.footer -->

        </div><!-- ./main -->

    </div><!-- ./site -->

    <?php Loader::element('footer_required'); ?>

    <!-- Load JS -->
    <script defer type="text/javascript" src="<?php echo $this->getThemePath() ?>/script.js?version=1.0.0"></script>
    <!-- /Load JS -->

    <!-- Cookie Consent -->
    <!-- <script>
        window.addEventListener("load", function(){
            window.cookieconsent.initialise({
                "palette": {
                    "popup": {
                        "background": "#efefef",
                        "text": "#000000"
                    },
                    "button": {
                        "background": "#02284f",
                        "text": "#ffffff"
                    }
                },
                "position": "bottom-left",
                "theme": "edgeless",
                "content": {
                    "href": "/index.php?cID=194",
                    "message": "Wir nutzen Cookies, um Ihnen die bestmögliche Browsing-Erfahrung zu bieten. Die mit Hilfe von Cookies gesammelten Daten werden zur Optimierung der Webseite genutzt.",
                    "dismiss": "Okay ✓",
                    "link": "Datenschutz"
                }
            })
        });
    </script> -->
    <!-- /Cookie Consent -->

</body>
</html>
